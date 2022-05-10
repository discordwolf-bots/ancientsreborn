import { activity_type_enum } from '@prisma/client';
import { MessageAttachment, MessageOptions } from 'discord.js';
import { Time } from 'e';
import { KlasaMessage, KlasaUser } from 'klasa';
import { Bank } from 'oldschooljs';
import { toKMB } from 'oldschooljs/dist/util';

import { prisma } from '../../settings/prisma';
import { SkillsEnum } from '../../skilling/types';
import { sorts } from '../../sorts';
import { stringMatches } from '../../util';
import { barChart, pieChart } from '../../util/chart';
import killableMonsters from '../data/killableMonsters';

interface DataPiece {
	name: string;
	run: (user: KlasaUser) => Promise<MessageOptions | Buffer | { bank: Bank; title: string; content?: string }>;
}

function wrap(str: string) {
	return `'"${str}"'`;
}

const dataPoints: DataPiece[] = [
	{
		name: 'Personal Activity Types',
		run: async (user: KlasaUser) => {
			const result: { type: activity_type_enum; qty: number }[] =
				await prisma.$queryRawUnsafe(`SELECT type, count(type) AS qty
FROM activity
WHERE completed = true	
AND user_id = ${BigInt(user.id)}
OR (data->>'users')::jsonb @> ${wrap(user.id)}::jsonb
GROUP BY type;`);
			const dataPoints: [string, number][] = result.filter(i => i.qty >= 5).map(i => [i.type, i.qty]);
			return barChart(`${user.username}'s Activity Types`, val => `${val} Trips`, dataPoints);
		}
	},
	{
		name: 'Personal Activity Durations',
		run: async (user: KlasaUser) => {
			const result: { type: activity_type_enum; hours: number }[] =
				await prisma.$queryRawUnsafe(`SELECT type, sum(duration) / ${Time.Hour} AS hours
FROM activity
WHERE completed = true
AND user_id = ${BigInt(user.id)}
OR (data->>'users')::jsonb @> ${wrap(user.id)}::jsonb
GROUP BY type;`);
			const dataPoints: [string, number][] = result.filter(i => i.hours >= 1).map(i => [i.type, i.hours]);
			return barChart(`${user.username}'s Activity Durations`, val => `${val} Hours`, dataPoints);
		}
	},
	{
		name: 'Personal Monster KC',
		run: async (user: KlasaUser) => {
			const result: { id: number; kc: number }[] =
				await prisma.$queryRaw`SELECT (data->>'monsterID')::int as id, SUM((data->>'quantity')::int) AS kc
FROM activity
WHERE completed = true
AND user_id = ${BigInt(user.id)}
AND type = 'MonsterKilling'
AND data IS NOT NULL
AND data::text != '{}'
GROUP BY data->>'monsterID';`;
			const dataPoints: [string, number][] = result
				.sort((a, b) => b.kc - a.kc)
				.slice(0, 30)
				.map(i => [killableMonsters.find(mon => mon.id === i.id)?.name ?? i.id.toString(), i.kc]);
			return barChart(`${user.username}'s Monster KC's`, val => `${val} KC`, dataPoints);
		}
	},
	{
		name: 'Personal Top Bank Value Items',
		run: async (user: KlasaUser) => {
			const items = user.bank().items().sort(sorts.value);
			const dataPoints: [string, number][] = items
				.filter(i => i[1] >= 1)
				.slice(0, 15)
				.map(i => [i[0].name, i[0].price * i[1]]);
			const everythingElse = items.slice(20, items.length);
			let everythingElseBank = new Bank();
			for (const i of everythingElse) everythingElseBank.add(i[0].id, i[1]);
			dataPoints.push(['Everything else', everythingElseBank.value()]);
			return barChart(`${user.username}'s Top Bank Value Items`, val => `${toKMB(val)} GP`, dataPoints);
		}
	},
	{
		name: 'Personal Collection Log Progress',
		run: async (user: KlasaUser) => {
			const { percent } = user.completion();
			return {
				files: [
					new MessageAttachment(
						await pieChart(`${user.username}'s Personal Collection Log Progress`, val => `${toKMB(val)}%`, [
							['Complete Collection Log Items', percent, '#9fdfb2'],
							['Incomplete Collection Log Items', 100 - percent, '#df9f9f']
						])
					)
				]
			};
		}
	},
	{
		name: 'Global 200ms',
		run: async () => {
			const result = (
				await Promise.all(
					Object.values(SkillsEnum).map(
						skillName =>
							prisma.$queryRawUnsafe(`SELECT '${skillName}' as skill_name, COUNT(id) AS qty
FROM users
WHERE "skills.${skillName}" = 200000000;`) as Promise<{ qty: number; skill_name: string }[]>
					)
				)
			)
				.map(i => i[0])
				.sort((a, b) => b.qty - a.qty);
			return barChart(
				'Global 200ms',
				val => `${val} 200ms`,
				result.map(i => [i.skill_name, i.qty])
			);
		}
	}
];

export async function dataCommand(msg: KlasaMessage, input: string) {
	const dataPoint = dataPoints.find(dp => stringMatches(dp.name, input));
	if (!dataPoint) {
		return {
			content: `The data points you can see are: ${dataPoints.map(i => i.name).join(', ')}.`
		};
	}
	return dataPoint.run(msg.author);
}
