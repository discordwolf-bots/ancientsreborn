import itemID from '../../../../util/itemID';
import { Metallurgy } from '../../../types';

const Studs: Metallurgy[] = [
	{
		name: 'Bronze Studs',
		id: itemID('Bronze Studs'),
		level: 8,
		xp: 32,
		timePer: 1 * 60 + 32,
		inputOres: {
			[itemID('Copper Ore')]: 10,
			[itemID('Tin Ore')]: 10
		}
	},
	{
		name: 'Iron Studs',
		id: itemID('Iron Studs'),
		level: 17,
		xp: 45,
		timePer: 1 * 60 + 45,
		inputOres: {
			[itemID('Iron Ore')]: 15
		}
	},
	{
		name: 'Steel Studs',
		id: itemID('Steel Studs'),
		level: 27,
		xp: 128,
		timePer: 4 * 60 + 38,
		inputOres: {
			[itemID('Iron Ore')]: 20,
			[itemID('Coal')]: 10
		}
	},
	{
		name: 'Mithril Studs',
		id: itemID('Mithril Studs'),
		level: 47,
		xp: 193,
		timePer: 7 * 60 + 1,
		inputOres: {
			[itemID('Mithril Ore')]: 20,
			[itemID('Coal')]: 15
		}
	},
	{
		name: 'Adamantium Studs',
		id: itemID('Adamantium Studs'),
		level: 57,
		xp: 269,
		timePer: 9 * 60 + 11,
		inputOres: {
			[itemID('Adamantium Ore')]: 20,
			[itemID('Coal')]: 20
		}
	},
	{
		name: 'Dianium Studs',
		id: itemID('Dianium Studs'),
		level: 67,
		xp: 360,
		timePer: 11 * 60 + 50,
		inputOres: {
			[itemID('Dianium Ore')]: 20,
			[itemID('Coal')]: 25
		}
	}
];

export default Studs;
