import { Guild } from 'discord.js';
import { noOp, notEmpty } from 'e';
import { Task } from 'klasa';

import { CLUser, SkillUser } from '../commands/Minion/leaderboard';
import { production } from '../config';
import { BOT_TYPE, Roles, SupportServer } from '../lib/constants';
import { getCollectionItems } from '../lib/data/Collections';
import { UserSettings } from '../lib/settings/types/UserSettings';
import Skills from '../lib/skilling/skills';
import { convertXPtoLVL } from '../lib/util';
import { logError } from '../lib/util/logError';

function addToUserMap(userMap: Record<string, string[]>, id: string, reason: string) {
	if (!userMap[id]) userMap[id] = [];
	userMap[id].push(reason);
}

const collections = ['pets', 'skilling', 'clues', 'bosses', 'minigames', 'raids', 'slayer', 'other', 'custom'];

async function addRoles({
	g,
	users,
	role,
	badge,
	userMap
}: {
	g: Guild;
	users: string[];
	role: string;
	badge: number | null;
	userMap?: Record<string, string[]>;
}): Promise<string> {
	let added: string[] = [];
	let removed: string[] = [];
	let _role = await g.roles.fetch(role);
	if (!_role) return 'Could not check role';
	for (const u of users.filter(notEmpty)) {
		try {
			await g.members.fetch(u);
		} catch {
			logError(`Failed to fetch \`${u}\` member.`);
		}
	}
	const roleName = _role.name!;
	for (const mem of g.members.cache.values()) {
		if (mem.roles.cache.has(role) && !users.includes(mem.user.id)) {
			if (production) {
				await mem.roles.remove(role).catch(noOp);
			}
			if (badge && mem.user.settings.get(UserSettings.Badges).includes(badge)) {
				await mem.user.settings.sync(true);
				await mem.user.settings
					.update(UserSettings.Badges, badge, {
						arrayAction: 'remove'
					})
					.catch(noOp);
			}
			removed.push(mem.user.username);
		}

		if (users.includes(mem.user.id)) {
			if (production && !mem.roles.cache.has(role)) {
				added.push(mem.user.username);
				await mem.roles.add(role).catch(noOp);
			}
			if (badge && !mem.user.settings.get(UserSettings.Badges).includes(badge)) {
				await mem.user.settings.sync(true);
				await mem.user.settings
					.update(UserSettings.Badges, badge, {
						arrayAction: 'add'
					})
					.catch(noOp);
			}
		}
	}
	let str = `\n**${roleName}**`;
	if (added.length > 0) {
		str += `\nAdded to: ${added.join(', ')}.`;
	}
	if (removed.length > 0) {
		str += `\nRemoved from: ${removed.join(', ')}.`;
	}
	if (userMap) {
		let userArr = [];
		for (const [id, arr] of Object.entries(userMap)) {
			let username = (g.client.commands.get('leaderboard') as any)!.getUsername(id);
			userArr.push(`${username}(${arr.join(', ')})`);
		}
		str += `\n${userArr.join(',')}`;
	}
	if (added.length || removed.length) {
		str += '\n';
	} else {
		return `\nNo changes for **${roleName}**`;
	}
	return str;
}

export default class extends Task {
	async run() {
		const g = this.client.guilds.cache.get(SupportServer);
		if (!g) return;
		if (BOT_TYPE === 'OSB' && production) {
			await g.members.fetch();
		}
		const skillVals = Object.values(Skills);

		let result = '';
		// eslint-disable-next-line @typescript-eslint/unbound-method
		const q = async <T>(str: string) => {
			const result = await this.client.query<T>(str).catch(err => {
				logError(`This query failed: ${str}`, err);
				return [];
			});
			return result;
		};

		// Top Skillers
		async function topSkillers() {
			const topSkillers = (
				await Promise.all([
					...skillVals.map(s =>
						q<
							{
								id: string;
								xp: string;
							}[]
						>(`SELECT id, "skills.${s.id}" as xp FROM users ORDER BY xp DESC LIMIT 1;`)
					),
					q<
						{
							id: string;
						}[]
					>(
						`SELECT id,  ${skillVals.map(s => `"skills.${s.id}"`)}, ${skillVals
							.map(s => `"skills.${s.id}"::bigint`)
							.join(' + ')} as totalxp FROM users ORDER BY totalxp DESC LIMIT 1;`
					)
				])
			).map(i => i[0]?.id);

			// Rank 1 Total Level
			const rankOneTotal = (
				await q<SkillUser[]>(
					`SELECT id,  ${skillVals.map(s => `"skills.${s.id}"`)}, ${skillVals
						.map(s => `"skills.${s.id}"::bigint`)
						.join(' + ')} as totalxp FROM users ORDER BY totalxp DESC LIMIT 200;`
				)
			)
				.map(u => {
					let totalLevel = 0;
					for (const skill of skillVals) {
						totalLevel += convertXPtoLVL(Number(u[`skills.${skill.id}` as keyof SkillUser]) as any);
					}
					return {
						id: u.id,
						totalLevel
					};
				})
				.sort((a, b) => b.totalLevel - a.totalLevel)[0];
			topSkillers.push(rankOneTotal.id);

			result += await addRoles({ g: g!, users: topSkillers, role: Roles.TopSkiller, badge: 9 });
		}

		// Top Collectors
		async function topCollector() {
			const userMap = {};

			function generateQuery(items: number[], ironmenOnly: boolean, limit: number) {
				const t = `
SELECT id, (cardinality(u.cl_keys) - u.inverse_length) as qty
				  FROM (
  SELECT ARRAY(SELECT * FROM JSONB_OBJECT_KEYS("collectionLogBank")) "cl_keys",
  				id, "collectionLogBank",
				cardinality(ARRAY(SELECT * FROM JSONB_OBJECT_KEYS("collectionLogBank" - array[${items
					.map(i => `'${i}'`)
					.join(', ')}]))) "inverse_length"
			FROM users
			WHERE "collectionLogBank" ?| array[${items.map(i => `'${i}'`).join(', ')}]
			${ironmenOnly ? 'AND "minion.ironman" = true' : ''}
			) u
			ORDER BY qty DESC
			LIMIT ${limit};
`;

				return t;
			}

			const topCollectors = (
				await Promise.all(
					collections.map(async clName => {
						const items = getCollectionItems(clName);
						if (!items || items.length === 0) {
							logError(`${clName} collection log doesnt exist`);
							return [];
						}

						function handleErr(): CLUser[] {
							logError(`Failed to select top collectors for ${clName}`);
							return [];
						}

						const [users, ironUsers] = await Promise.all([
							q<any>(generateQuery(items, false, 1))
								.then(i => i.filter((i: any) => i.qty > 0) as CLUser[])
								.catch(handleErr),
							q<any>(generateQuery(items, true, 1))
								.then(i => i.filter((i: any) => i.qty > 0) as CLUser[])
								.catch(handleErr)
						]);

						let result = [];
						const userID = users[0]?.id;
						const ironmanID = ironUsers[0]?.id;

						if (userID) {
							addToUserMap(userMap, userID, `Rank 1 ${clName} CL`);
							result.push(userID);
						}
						if (ironmanID) {
							addToUserMap(userMap, ironmanID, `Rank 1 Ironman ${clName} CL`);
							result.push(ironmanID);
						}

						return result;
					})
				)
			).flat(2);

			const topIronUsers = (await q<any>(generateQuery(getCollectionItems('overall'), true, 3))).filter(
				(i: any) => i.qty > 0
			) as CLUser[];
			for (let i = 0; i < topIronUsers.length; i++) {
				const id = topIronUsers[i]?.id;
				addToUserMap(userMap, id, `Rank ${i + 1} Ironman Collector`);
				topCollectors.push(id);
			}
			const topNormieUsers = (await q<any>(generateQuery(getCollectionItems('overall'), false, 3))).filter(
				(i: any) => i.qty > 0
			) as CLUser[];
			for (let i = 0; i < topNormieUsers.length; i++) {
				const id = topNormieUsers[i]?.id;
				addToUserMap(userMap, id, `Rank ${i + 1} Collector`);
				topCollectors.push(id);
			}

			result += await addRoles({ g: g!, users: topCollectors, role: Roles.TopCollector, badge: 10, userMap });
		}

		// Top sacrificers
		async function topSacrificers() {
			const userMap = {};
			let topSacrificers: string[] = [];
			const mostValue = await q<SkillUser[]>('SELECT id FROM users ORDER BY "sacrificedValue" DESC LIMIT 3;');
			for (let i = 0; i < 3; i++) {
				topSacrificers.push(mostValue[i].id);
				addToUserMap(userMap, mostValue[i].id, `Rank ${i + 1} Sacrifice Value`);
			}
			const mostUniques = await q<SkillUser[]>(`SELECT u.id, u.sacbanklength FROM (
  SELECT (SELECT COUNT(*) FROM JSON_OBJECT_KEYS("sacrificedBank")) sacbanklength, id FROM users
) u
ORDER BY u.sacbanklength DESC LIMIT 1;`);
			topSacrificers.push(mostUniques[0].id);
			addToUserMap(userMap, mostUniques[0].id, 'Most Uniques Sacrificed');

			result += await addRoles({ g: g!, users: topSacrificers, role: Roles.TopSacrificer, badge: 8, userMap });
		}

		// Top duelers
		async function topDuelers() {
			const userMap = {};
			let topDuelers: string[] = [];
			const mostKills = await q<SkillUser[]>('SELECT id FROM users ORDER BY "stats_duelWins" DESC LIMIT 3;');
			for (let i = 0; i < 3; i++) {
				topDuelers.push(mostKills[i].id);
				addToUserMap(userMap, mostKills[i].id, `Rank ${i + 1} Duel Wins`);
			}
			result += await addRoles({ g: g!, users: topDuelers, role: Roles.TopDueler, badge: 9, userMap });
		}

		const tup = [
			['Top Sacrificers', topSacrificers],
			['Top Collectors', topCollector],
			['Top Skillers', topSkillers],
			['Top Duelers', topDuelers]
		] as const;

		let failed: string[] = [];
		await Promise.all(
			tup.map(async ([name, fn]) => {
				try {
					await fn();
				} catch (err: any) {
					failed.push(`${name} (${err.message})`);
					logError(err);
				}
			})
		);

		let res = result || 'Roles task: nothing to add or remove.';
		res += `\n\n${failed.length > 0 ? `Failed: ${failed.join(', ')}` : ''}`;

		return res;
	}
}
