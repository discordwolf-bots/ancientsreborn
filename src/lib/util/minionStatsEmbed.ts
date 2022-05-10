import { Embed } from '@discordjs/builders';
import { shuffleArr } from 'e';
import { KlasaUser } from 'klasa';
import { SkillsScore } from 'oldschooljs/dist/meta/types';
import { convertXPtoLVL, toKMB } from 'oldschooljs/dist/util';

import { badges, skillEmoji } from '../constants';
import { effectiveMonsters } from '../minions/data/killableMonsters';
import { UserSettings } from '../settings/types/UserSettings';
import { Skills } from '../types';
import { addArrayOfNumbers } from '../util';
import { logError } from './logError';

export async function minionStatsEmbed(user: KlasaUser): Promise<Embed> {
	const { rawSkills } = user;
	const QP = user.settings.get(UserSettings.QP);

	const xp = addArrayOfNumbers(Object.values(rawSkills) as number[]);
	const totalLevel = user.totalLevel();
	const skillCell = (skill: string) => {
		if (skill === 'overall') {
			return `${skillEmoji[skill as keyof typeof skillEmoji] as keyof SkillsScore} ${totalLevel}\n${
				skillEmoji.combat
			} ${user.combatLevel}`;
		}

		const skillXP = rawSkills[skill as keyof Skills] ?? 1;
		return `${skillEmoji[skill as keyof typeof skillEmoji] as keyof SkillsScore} ${convertXPtoLVL(
			skillXP
		).toLocaleString()} (${toKMB(skillXP)})`;
	};

	const rawBadges = user.settings.get(UserSettings.Badges);
	const badgesStr = rawBadges.map(num => badges[num]).join(' ');

	const embed = new Embed()
		.setTitle(`${badgesStr}${user.minionName}`)
		.addField({
			name: '\u200b',
			value: ['attack', 'strength', 'defence', 'ranged', 'prayer', 'magic', 'runecraft', 'construction']
				.map(skillCell)
				.join('\n'),
			inline: true
		})
		.addField({
			name: '\u200b',
			value: ['hitpoints', 'agility', 'herblore', 'thieving', 'crafting', 'fletching', 'slayer', 'hunter']
				.map(skillCell)
				.join('\n'),
			inline: true
		})
		.addField({
			name: '\u200b',
			value: ['mining', 'smithing', 'fishing', 'cooking', 'firemaking', 'woodcutting', 'farming', 'overall']
				.map(skillCell)
				.join('\n'),
			inline: true
		});

	if (user.isIronman) {
		embed.setColor(5_460_819);
	}

	const { percent } = user.completion();
	embed.addField({
		name: `${skillEmoji.total} Overall`,
		value: `**Level:** ${totalLevel}
**XP:** ${xp.toLocaleString()}
**QP** ${QP}
**CL Completion:** ${percent.toFixed(1)}%`,
		inline: true
	});

	const otherStats: [string, number | string][] = [
		['Duel Wins', user.settings.get(UserSettings.Stats.DuelWins)],
		['Duel Losses', user.settings.get(UserSettings.Stats.DuelLosses)],
		['Sacrificed', toKMB(user.settings.get(UserSettings.SacrificedValue))]
	];

	const monsterScores = Object.entries(user.settings.get(UserSettings.MonsterScores)).sort((a, b) => a[1] - b[1]);
	if (monsterScores.length > 0) {
		const [id, score] = monsterScores[0];
		const res = effectiveMonsters.find(c => c.id === parseInt(id))!;
		if (!res) {
			logError(`No monster found with id ${id} for stats embed`);
		} else {
			otherStats.push([`${res.name} KC`, score]);
		}
	}

	embed.addField({
		name: 'Other',
		value: shuffleArr(otherStats)
			.slice(0, 4)
			.map(([name, text]) => {
				return `**${name}:** ${text}`;
			})
			.join('\n'),
		inline: true
	});

	return embed;
}
