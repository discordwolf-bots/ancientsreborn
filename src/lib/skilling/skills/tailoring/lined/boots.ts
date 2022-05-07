import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Boots: Production[] = [
	{
		name: 'Bronze Lined Boots',
		id: itemID('Bronze Lined Boots'),
		level: 2,
		xp: 120,
		hourPer: 0,
		minutePer: 11,
		secondPer: 52,
		input: {
			[itemID('Bronze Fiber')]: 10,
			[itemID('Moonweave Cloth')]: 2
		}
	},
	{
		name: 'Iron Lined Boots',
		id: itemID('Iron Lined Boots'),
		level: 11,
		xp: 225,
		hourPer: 0,
		minutePer: 17,
		secondPer: 53,
		input: {
			[itemID('Iron Fiber')]: 10,
			[itemID('Tangleweave Cloth')]: 2
		}
	},
	{
		name: 'Steel Lined Boots',
		id: itemID('Steel Lined Boots'),
		level: 21,
		xp: 320,
		hourPer: 0,
		minutePer: 23,
		secondPer: 51,
		input: {
			[itemID('Steel Fiber')]: 10,
			[itemID('Duneweave Cloth')]: 2
		}
	},
	{
		name: 'Mithril Lined Boots',
		id: itemID('Mithril Lined Boots'),
		level: 41,
		xp: 414,
		hourPer: 0,
		minutePer: 29,
		secondPer: 49,
		input: {
			[itemID('Mithril Fiber')]: 10,
			[itemID('Mossweave Cloth')]: 2
		}
	},
	{
		name: 'Adamantium Lined Boots',
		id: itemID('Adamantium Lined Boots'),
		level: 51,
		xp: 506,
		hourPer: 0,
		minutePer: 35,
		secondPer: 47,
		input: {
			[itemID('Adamantium Fiber')]: 10,
			[itemID('Rockweave Cloth')]: 2
		}
	},
	{
		name: 'Dianium Lined Boots',
		id: itemID('Dianium Lined Boots'),
		level: 61,
		xp: 602,
		hourPer: 0,
		minutePer: 41,
		secondPer: 45,
		input: {
			[itemID('Dianium Fiber')]: 10,
			[itemID('Frostweave Cloth')]: 2
		}
	}
];

export default Boots;
