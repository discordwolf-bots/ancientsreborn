import LootTable from 'oldschooljs/dist/structures/LootTable';

import { Emoji } from '../../constants';
import itemID from '../../util/itemID';
import { Ore, SkillsEnum } from '../types';

const GemRockTable = new LootTable()
	.add('Rough Topaz', 1, 30)
	.add('Rough Emerald', 1, 30)
	.add('Rough Sapphire', 1, 30)
	.add('Rough Ruby', 1, 30)
	.add('Rough Amethyst', 1, 30)
	.add('Chipped Topaz', 1, 10)
	.add('Chipped Emerald', 1, 10)
	.add('Chipped Sapphire', 1, 10)
	.add('Chipped Ruby', 1, 10)
	.add('Chipped Amethyst', 1, 10)
	.add('Cut Topaz', 1, 1)
	.add('Cut Emerald', 1, 1)
	.add('Cut Sapphire', 1, 1)
	.add('Cut Ruby', 1, 1)
	.add('Cut Amethyst', 1, 1);

const Ores: Ore[] = [
	{
		level: 1,
		xp: 5,
		id: itemID('Copper Ore'),
		name: 'Copper Ore',
		cbRequired: 1
	},
	{
		level: 1,
		xp: 5,
		id: itemID('Tin Ore'),
		name: 'Tin Ore',
		cbRequired: 1
	},
	{
		level: 10,
		xp: 50,
		id: itemID('Iron Ore'),
		name: 'Iron Ore',
		cbRequired: 1
	},
	{
		level: 20,
		xp: 15,
		id: itemID('Coal'),
		name: 'Coal',
		cbRequired: 1
	},
	{
		level: 30,
		xp: 20,
		id: itemID('Silver Ore'),
		name: 'Silver Ore',
		cbRequired: 1
	},
	{
		level: 35,
		xp: 23,
		id: itemID('Gold Ore'),
		name: 'Gold Ore',
		cbRequired: 1
	},
	{
		level: 40,
		xp: 25,
		id: itemID('Mithril Ore'),
		name: 'Mithril Ore',
		cbRequired: 1
	},
	{
		level: 50,
		xp: 30,
		id: itemID('Adamantium Ore'),
		name: 'Adamantium Ore',
		cbRequired: 1
	},
	{
		level: 60,
		xp: 35,
		id: itemID('Dianium Ore'),
		name: 'Dianium Ore',
		cbRequired: 1
	},
	{
		level: 70,
		xp: 40,
		id: itemID('Platinum Ore'),
		name: 'Platinum Ore',
		cbRequired: 1
	},
	{
		level: 80,
		xp: 80,
		id: itemID('Demonite Ore'),
		name: 'Demonite Ore',
		cbRequired: 1
	}
];

const Mining = {
	aliases: ['mining'],
	Ores,
	GemRockTable,
	id: SkillsEnum.Mining,
	emoji: Emoji.Mining,
	name: 'Mining'
};

export default Mining;
