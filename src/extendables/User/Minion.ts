import { User } from 'discord.js';
import { Time, uniqueArr } from 'e';
import { Extendable, ExtendableStore, KlasaClient, KlasaUser } from 'klasa';
import { Bank } from 'oldschooljs';
import Monster from 'oldschooljs/dist/structures/Monster';
import SimpleTable from 'oldschooljs/dist/structures/SimpleTable';

import {
	Emoji,
	Events,
	LEVEL_60_XP,
	LEVEL_100_XP,
	LEVEL_150_XP,
	LEVEL_200_XP,
	LEVEL_250_XP,
	LEVEL_300_XP,
	LEVEL_350_XP,
	LEVEL_400_XP,
	LEVEL_404_XP,
	MAX_QP,
	MAX_TOTAL_LEVEL,
	MAX_XP,
	skillEmoji
} from '../../lib/constants';
import { onMax } from '../../lib/events';
import killableMonsters, { effectiveMonsters } from '../../lib/minions/data/killableMonsters';
import { AttackStyles } from '../../lib/minions/functions';
import { AddXpParams, KillableMonster } from '../../lib/minions/types';
import { prisma } from '../../lib/settings/prisma';
import { getActivityOfUser } from '../../lib/settings/settings';
import { UserSettings } from '../../lib/settings/types/UserSettings';
import Skills from '../../lib/skilling/skills';
import Blacksmithing from '../../lib/skilling/skills/blacksmithing';
import Carpentry from '../../lib/skilling/skills/carpentry';
import Cooking from '../../lib/skilling/skills/cooking';
import Fishing from '../../lib/skilling/skills/fishing';
import Fletching from '../../lib/skilling/skills/fletching';
import Gathering from '../../lib/skilling/skills/gathering';
import Metallurgy from '../../lib/skilling/skills/metallurgy';
import Mining from '../../lib/skilling/skills/mining';
import Tailoring from '../../lib/skilling/skills/tailoring';
import Weaving from '../../lib/skilling/skills/weaving';
import Woodcutting from '../../lib/skilling/skills/woodcutting';
import { SkillsEnum } from '../../lib/skilling/types';
import { Skills as TSkills } from '../../lib/types';
import {
	GatheringActivityTaskOptions,
	GroupMonsterActivityTaskOptions,
	MonsterActivityTaskOptions,
	ProductionActivityTaskOptions
} from '../../lib/types/minions';
import {
	addItemToBank,
	convertXPtoLVL,
	formatDuration,
	formatSkillRequirements,
	skillsMeetRequirements,
	stringMatches,
	toKMB,
	toTitleCase,
	Util
} from '../../lib/util';
import { formatOrdinal } from '../../lib/util/formatOrdinal';
import { calcMaxTripLength, getKC, skillLevel } from '../../lib/util/minionUtils';
import { activity_type_enum } from '.prisma/client';

const suffixes = new SimpleTable<string>()
	.add('🎉', 200)
	.add('🎆', 10)
	.add('🙌', 10)
	.add('🎇', 10)
	.add('🥳', 10)
	.add('🍻', 10)
	.add('🎊', 10);

function levelUpSuffix() {
	return suffixes.roll().item;
}

export default class extends Extendable {
	public constructor(store: ExtendableStore, file: string[], directory: string) {
		super(store, file, directory, { appliesTo: [User] });
	}

	// @ts-ignore 2784
	public get minionStatus(this: User) {
		const currentTask = getActivityOfUser(this.id);

		if (!currentTask) {
			return `${this.minionName} is currently doing nothing.`;
		}

		const durationRemaining = currentTask.finishDate - Date.now();
		const formattedDuration = `${formatDuration(durationRemaining)} remaining.`;

		switch (currentTask.type) {
			case 'MonsterKilling': {
				const data = currentTask as MonsterActivityTaskOptions;
				const monster = killableMonsters.find(mon => mon.id === data.monsterID);

				return `${this.minionName} is currently killing ${data.quantity}x ${
					monster!.name
				}. ${formattedDuration}`;
			}

			case 'GroupMonsterKilling': {
				const data = currentTask as GroupMonsterActivityTaskOptions;
				const monster = killableMonsters.find(mon => mon.id === data.monsterID);

				return `${this.minionName} is currently killing ${data.quantity}x ${monster!.name} with a party of ${
					data.users.length
				}. ${formattedDuration}`;
			}

			case 'Fishing': {
				const data = currentTask as GatheringActivityTaskOptions;

				const fish = Fishing.Fishes.find(fish => fish.id === data.resourceID);

				return `${this.minionName} is currently fishing ${data.quantity}x ${
					fish!.name
				}. ${formattedDuration} Your ${Emoji.Fishing} Fishing level is ${this.skillLevel(SkillsEnum.Fishing)}`;
			}

			case 'Mining': {
				const data = currentTask as GatheringActivityTaskOptions;

				const ore = Mining.Ores.find(ore => ore.id === data.resourceID);

				return `${this.minionName} is currently mining ${data.quantity}x ${
					ore!.name
				}. ${formattedDuration} Your ${Emoji.Mining} Mining level is ${this.skillLevel(SkillsEnum.Mining)}`;
			}

			case 'Woodcutting': {
				const data = currentTask as GatheringActivityTaskOptions;

				const log = Woodcutting.Logs.find(log => log.id === data.resourceID);

				return `${this.minionName} is currently chopping ${data.quantity}x ${
					log!.name
				}. ${formattedDuration} Your ${Emoji.Woodcutting} Woodcutting level is ${this.skillLevel(
					SkillsEnum.Woodcutting
				)}`;
			}

			case 'Gathering': {
				const data = currentTask as GatheringActivityTaskOptions;

				const herb = Gathering.Herbs.find(herb => herb.id === data.resourceID);

				return `${this.minionName} is currently gathering ${data.quantity}x ${
					herb!.name
				}. ${formattedDuration} Your ${Emoji.Gathering} Gathering level is ${this.skillLevel(
					SkillsEnum.Gathering
				)}`;
			}

			case 'Questing': {
				return `${
					this.minionName
				} is currently Questing. ${formattedDuration} Your current Quest Point count is: ${this.settings.get(
					UserSettings.QP
				)}.`;
			}

			case 'Metallurgy': {
				const data = currentTask as ProductionActivityTaskOptions;

				const produce = Metallurgy.Smeltables.find(produce => produce.id === data.produceID);

				return `${this.minionName} is currently making ${data.quantity}x ${
					produce!.name
				}. ${formattedDuration} Your ${Emoji.Metallurgy} Metallurgy level is ${this.skillLevel(
					SkillsEnum.Metallurgy
				)}`;
			}

			case 'Blacksmithing': {
				const data = currentTask as ProductionActivityTaskOptions;

				const produce = Blacksmithing.blacksmithingItems.find(produce => produce.id === data.produceID);

				return `${this.minionName} is currently smithing ${data.quantity}x ${
					produce!.name
				}. ${formattedDuration} Your ${Emoji.Blacksmithing} Blacksmithing level is ${this.skillLevel(
					SkillsEnum.Blacksmithing
				)}`;
			}

			case 'Cooking': {
				const data = currentTask as ProductionActivityTaskOptions;

				const produce = Cooking.Cookables.find(cookable => cookable.id === data.produceID);

				return `${this.minionName} is currently cooking ${data.quantity}x ${
					produce!.name
				}. ${formattedDuration} Your ${Emoji.Cooking} Cooking level is ${this.skillLevel(SkillsEnum.Cooking)}`;
			}

			case 'Carpentry': {
				const data = currentTask as ProductionActivityTaskOptions;

				const produce = Carpentry.Craftables.find(produce => produce.id === data.produceID);

				return `${this.minionName} is currently making ${data.quantity}x ${
					produce!.name
				}. ${formattedDuration} Your ${Emoji.Carpentry} Carpentry level is ${this.skillLevel(
					SkillsEnum.Carpentry
				)}`;
			}

			case 'Weaving': {
				const data = currentTask as ProductionActivityTaskOptions;

				const produce = Weaving.weavingItems.find(produce => produce.id === data.produceID);

				return `${this.minionName} is currently making ${data.quantity}x ${
					produce!.name
				}. ${formattedDuration} Your ${Emoji.Weaving} Weaving level is ${this.skillLevel(SkillsEnum.Weaving)}`;
			}
			case 'Fletching': {
				const data = currentTask as ProductionActivityTaskOptions;

				const produce = Fletching.Fletchables.find(produce => produce.id === data.produceID);

				return `${this.minionName} is currently making ${data.quantity}x ${
					produce!.name
				}. ${formattedDuration} Your ${Emoji.Fletching} Fletching level is ${this.skillLevel(
					SkillsEnum.Fletching
				)}`;
			}
			case 'Tailoring': {
				const data = currentTask as ProductionActivityTaskOptions;

				const produce = Tailoring.tailoringItems.find(produce => produce.id === data.produceID);

				return `${this.minionName} is currently making ${data.quantity}x ${
					produce!.name
				}. ${formattedDuration} Your ${Emoji.Tailoring} Tailoring level is ${this.skillLevel(
					SkillsEnum.Tailoring
				)}`;
			}
		}
	}

	getKC(this: KlasaUser, id: number) {
		return getKC(this, id);
	}

	getOpenableScore(this: KlasaUser, id: number) {
		return this.settings.get(UserSettings.OpenableScores)[id] ?? 0;
	}

	public async getKCByName(this: KlasaUser, kcName: string) {
		const mon = effectiveMonsters.find(
			mon => stringMatches(mon.name, kcName) || mon.aliases.some(alias => stringMatches(alias, kcName))
		);
		if (mon) {
			return [mon.name, this.getKC((mon as unknown as Monster).id)];
		}

		return [null, 0];
	}

	// @ts-ignore 2784
	public get hasMinion(this: User) {
		return this.settings.get(UserSettings.Minion.HasBought);
	}

	// @ts-ignore 2784
	public maxTripLength(this: User, activity?: activity_type_enum) {
		return calcMaxTripLength(this, activity);
	}

	// @ts-ignore 2784
	public get minionIsBusy(this: User): boolean {
		const usersTask = getActivityOfUser(this.id);
		return Boolean(usersTask);
	}

	// @ts-ignore 2784
	public get minionName(this: User): string {
		const name = this.settings.get(UserSettings.Minion.Name);
		const prefix = this.settings.get(UserSettings.Minion.Ironman) ? Emoji.Ironman : '';

		const icon = this.settings.get(UserSettings.Minion.Icon) ?? Emoji.Minion;

		return name ? `${prefix} ${icon} **${Util.escapeMarkdown(name)}**` : `${prefix} ${icon} Your minion`;
	}

	public async addXP(this: User, params: AddXpParams): Promise<string> {
		await this.settings.sync(true);
		const currentXP = this.settings.get(`skills.${params.skillName}`) as number;
		const currentLevel = this.skillLevel(params.skillName);
		const currentTotalLevel = this.totalLevel();

		const name = toTitleCase(params.skillName);

		const skill = Object.values(Skills).find(skill => skill.id === params.skillName)!;

		const newXP = Math.min(MAX_XP, currentXP + params.amount);
		const totalXPAdded = newXP - currentXP;
		const newLevel = convertXPtoLVL(Math.floor(newXP));

		// Pre-MAX_XP
		let preMax = -1;
		if (totalXPAdded > 0) {
			preMax = totalXPAdded;
			await prisma.xPGain.create({
				data: {
					user_id: BigInt(this.id),
					skill: params.skillName,
					xp: Math.floor(totalXPAdded),
					artificial: params.artificial ? true : null
				}
			});
		}

		// Post-MAX_XP
		if (params.amount - totalXPAdded > 0) {
			await prisma.xPGain.create({
				data: {
					user_id: BigInt(this.id),
					skill: params.skillName,
					xp: Math.floor(params.amount - totalXPAdded),
					artificial: params.artificial ? true : null,
					post_max: true
				}
			});
		}

		// If they reached a XP milestone, send a server notification.
		if (preMax !== -1) {
			for (const XPMilestone of [50_000_000, 100_000_000, 150_000_000, MAX_XP]) {
				if (newXP < XPMilestone) break;

				if (currentXP < XPMilestone && newXP >= XPMilestone) {
					this.client.emit(
						Events.ServerNotification,
						`${skill.emoji} **${this.username}'s** minion, ${
							this.minionName
						}, just achieved ${newXP.toLocaleString()} XP in ${toTitleCase(params.skillName)}!`
					);
					break;
				}
			}
		}
		// Level 60 (Dianium)
		// Level 100
		// Level 150
		// Level 200
		// Level 250
		// Level 300
		// Level 350
		// Level 400
		// Level 404 (Max)
		if (
			(currentLevel < 60 && newLevel >= 60) ||
			(currentLevel < 100 && newLevel >= 100) ||
			(currentLevel < 150 && newLevel >= 150) ||
			(currentLevel < 200 && newLevel >= 200) ||
			(currentLevel < 250 && newLevel >= 250) ||
			(currentLevel < 300 && newLevel >= 300) ||
			(currentLevel < 350 && newLevel >= 350) ||
			(currentLevel < 400 && newLevel >= 400) ||
			(currentLevel < 404 && newLevel >= 404)
		) {
			let milestone = 60;
			let milestoneXP = LEVEL_60_XP;
			if (currentLevel < 100 && newLevel >= 100) {
				milestone = 100;
				milestoneXP = LEVEL_100_XP;
			} else if (currentLevel < 150 && newLevel >= 150) {
				milestone = 150;
				milestoneXP = LEVEL_150_XP;
			} else if (currentLevel < 200 && newLevel >= 200) {
				milestone = 200;
				milestoneXP = LEVEL_200_XP;
			} else if (currentLevel < 250 && newLevel >= 250) {
				milestone = 250;
				milestoneXP = LEVEL_250_XP;
			} else if (currentLevel < 300 && newLevel >= 300) {
				milestone = 300;
				milestoneXP = LEVEL_300_XP;
			} else if (currentLevel < 350 && newLevel >= 350) {
				milestone = 350;
				milestoneXP = LEVEL_350_XP;
			} else if (currentLevel < 400 && newLevel >= 400) {
				milestone = 400;
				milestoneXP = LEVEL_400_XP;
			} else if (currentLevel < 404 && newLevel >= 404) {
				milestone = 404;
				milestoneXP = LEVEL_404_XP;
			}

			const skillNameCased = toTitleCase(params.skillName);
			const [usersWith] = await this.client.query<
				{
					count: string;
				}[]
			>(`SELECT COUNT(*) FROM users WHERE "skills.${params.skillName}" >= ${milestoneXP};`);

			let str = `${skill.emoji} **${this.username}'s** minion, ${
				this.minionName
			}, just achieved level ${milestone} in ${skillNameCased}! They are the ${formatOrdinal(
				parseInt(usersWith.count) + 1
			)} to get ${milestone} ${skillNameCased}.`;

			if (this.isIronman) {
				const [ironmenWith] = await this.client.query<
					{
						count: string;
					}[]
				>(
					`SELECT COUNT(*) FROM users WHERE "minion.ironman" = true AND "skills.${params.skillName}" >= ${milestoneXP};`
				);
				str += ` They are the ${formatOrdinal(parseInt(ironmenWith.count) + 1)} Ironman to get 99.`;
			}
			this.client.emit(Events.ServerNotification, str);
		}

		await this.settings.update(`skills.${params.skillName}`, Math.floor(newXP));

		let str = '';
		if (preMax !== -1) {
			str += params.minimal
				? `+${Math.ceil(preMax).toLocaleString()} ${skillEmoji[params.skillName]}`
				: `You received ${Math.ceil(preMax).toLocaleString()} ${skillEmoji[params.skillName]} XP`;
			if (params.duration && !params.minimal) {
				let rawXPHr = (params.amount / (params.duration / Time.Minute)) * 60;
				rawXPHr = Math.floor(rawXPHr / 1000) * 1000;
				str += ` (${toKMB(rawXPHr)}/Hr)`;
			}

			if (currentTotalLevel < MAX_TOTAL_LEVEL && this.totalLevel() >= MAX_TOTAL_LEVEL) {
				str += '\n\n**Congratulations, your minion has reached the maximum total level!**\n\n';
				onMax(this);
			} else if (currentLevel !== newLevel) {
				str += params.minimal
					? `(Levelled up to ${newLevel})`
					: `\n**Congratulations! Your ${name} level is now ${newLevel}** ${levelUpSuffix()}`;
			}
		}
		return str;
	}

	public skillLevel(this: User, skillName: SkillsEnum) {
		return skillLevel(this, skillName);
	}

	public totalLevel(this: User, returnXP = false) {
		const userXPs = Object.values(this.rawSkills) as number[];
		let totalLevel = 0;
		for (const xp of userXPs) {
			totalLevel += returnXP ? xp : convertXPtoLVL(xp);
		}
		return totalLevel;
	}

	// @ts-ignore 2784
	get isBusy(this: User) {
		const client = this.client as KlasaClient;
		return client.oneCommandAtATimeCache.has(this.id) || client.secondaryUserBusyCache.has(this.id);
	}

	/**
	 * Toggle whether this user is busy or not, this adds another layer of locking the user
	 * from economy actions.
	 *
	 * @param busy boolean Whether the new toggled state will be busy or not busy.
	 */
	public toggleBusy(this: User, busy: boolean) {
		const client = this.client as KlasaClient;

		if (busy) {
			client.secondaryUserBusyCache.add(this.id);
		} else {
			client.secondaryUserBusyCache.delete(this.id);
		}
	}

	public async addQP(this: User, amount: number) {
		await this.settings.sync(true);
		const currentQP = this.settings.get(UserSettings.QP);
		const newQP = Math.min(MAX_QP, currentQP + amount);

		if (currentQP < MAX_QP && newQP === MAX_QP) {
			this.client.emit(
				Events.ServerNotification,
				`${Emoji.QuestIcon} **${this.username}'s** minion, ${this.minionName}, just achieved the maximum amount of Quest Points!`
			);
		}

		this.log(`had ${newQP} QP added. Before[${currentQP}] New[${newQP}]`);
		return this.settings.update(UserSettings.QP, newQP);
	}

	// @ts-ignore 2784
	public get isIronman(this: User) {
		return this.settings.get(UserSettings.Minion.Ironman);
	}

	public async incrementMonsterScore(this: User, monsterID: number, amountToAdd = 1) {
		await this.settings.sync(true);
		const currentMonsterScores = this.settings.get(UserSettings.MonsterScores);

		this.log(`had Quantity[${amountToAdd}] KC added to Monster[${monsterID}]`);

		return this.settings.update(
			UserSettings.MonsterScores,
			addItemToBank(currentMonsterScores, monsterID, amountToAdd)
		);
	}

	public async incrementOpenableScore(this: User, openableID: number, amountToAdd = 1) {
		await this.settings.sync(true);
		const scores = this.settings.get(UserSettings.OpenableScores);

		return this.settings.update(UserSettings.OpenableScores, addItemToBank(scores, openableID, amountToAdd));
	}

	public async setAttackStyle(this: User, newStyles: AttackStyles[]) {
		await this.settings.update(UserSettings.AttackStyle, uniqueArr(newStyles), {
			arrayAction: 'overwrite'
		});
	}

	public getAttackStyles(this: User) {
		const styles = this.settings.get(UserSettings.AttackStyle);
		if (styles.length === 0) {
			return [SkillsEnum.Dexterity, SkillsEnum.Strength, SkillsEnum.Defence];
		}
		return styles;
	}

	public resolveAvailableItemBoosts(this: User, monster: KillableMonster) {
		const boosts = new Bank();
		if (monster.itemInBankBoosts) {
			for (const boostSet of monster.itemInBankBoosts) {
				let highestBoostAmount = 0;
				let highestBoostItem = 0;

				// find the highest boost that the player has
				for (const [itemID, boostAmount] of Object.entries(boostSet)) {
					const parsedId = parseInt(itemID);
					if (
						monster.wildy
							? !this.hasItemEquippedAnywhere(parsedId)
							: !this.hasItemEquippedOrInBank(parsedId)
					) {
						continue;
					}
					if (boostAmount > highestBoostAmount) {
						highestBoostAmount = boostAmount;
						highestBoostItem = parsedId;
					}
				}

				if (highestBoostAmount && highestBoostItem) {
					boosts.add(highestBoostItem, highestBoostAmount);
				}
			}
		}
		return boosts.bank;
	}

	public hasSkillReqs(this: User, reqs: TSkills): [boolean, string | null] {
		const hasReqs = skillsMeetRequirements(this.rawSkills, reqs);
		if (!hasReqs) {
			return [false, formatSkillRequirements(reqs)];
		}
		return [true, null];
	}

	// @ts-ignore 2784
	public get combatLevel(this: User): number {
		const strength = this.skillLevel(SkillsEnum.Strength);
		const dexterity = this.skillLevel(SkillsEnum.Dexterity);
		const defence = this.skillLevel(SkillsEnum.Defence);
		const intellect = this.skillLevel(SkillsEnum.Intellect);

		return Math.floor((strength + dexterity + defence + intellect) * 0.32);
	}
}
