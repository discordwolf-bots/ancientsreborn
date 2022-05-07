import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Staff: Production[] = [
	{
		name: 'Bronze Staff',
		id: itemID('Bronze Staff'),
		level: 8,
		xp: 331,
		hourPer: 0,
		minutePer: 29,
		secondPer: 23,
		input: {
			[itemID('Farwood Log')]: 25,
			[itemID('Bronze Orb')]: 1
		}
	},
	{
		name: 'Iron Staff',
		id: itemID('Iron Staff'),
		level: 17,
		xp: 663,
		hourPer: 0,
		minutePer: 49,
		secondPer: 3,
		input: {
			[itemID('Gnarlwood Log')]: 30,
			[itemID('Iron Orb')]: 1
		}
	},
	{
		name: 'Steel Staff',
		id: itemID('Steel Staff'),
		level: 27,
		xp: 1121,
		hourPer: 1,
		minutePer: 17,
		secondPer: 39,
		input: {
			[itemID('Sandwood Log')]: 45,
			[itemID('Steel Orb')]: 1
		}
	},
	{
		name: 'Mithril Staff',
		id: itemID('Mithril Staff'),
		level: 47,
		xp: 1595,
		hourPer: 1,
		minutePer: 47,
		secondPer: 17,
		input: {
			[itemID('Hillpine Log')]: 55,
			[itemID('Mithril Orb')]: 1
		}
	},
	{
		name: 'Adamantium Staff',
		id: itemID('Adamantium Staff'),
		level: 57,
		xp: 2045,
		hourPer: 2,
		minutePer: 14,
		secondPer: 53,
		input: {
			[itemID('Ashenwood Log')]: 60,
			[itemID('Adamantium Orb')]: 1
		}
	},
	{
		name: 'Dianium Staff',
		id: itemID('Dianium Staff'),
		level: 67,
		xp: 2544,
		hourPer: 2,
		minutePer: 44,
		secondPer: 31,
		input: {
			[itemID('Frostscarred Log')]: 65,
			[itemID('Dianium Orb')]: 1
		}
	}
];

export default Staff;
