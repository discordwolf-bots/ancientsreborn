import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Tunic: Production[] = [
	{
		name: 'Bronze Lined Tunic',
		id: itemID('Bronze Lined Tunic'),
		level: 8,
		xp: 269,
		hourPer: 0,
		minutePer: 24,
		secondPer: 27,
		input: {
			[itemID('Bronze Fiber')]: 20,
			[itemID('Moonweave Cloth')]: 4
		}
	},
	{
		name: 'Iron Lined Tunic',
		id: itemID('Iron Lined Tunic'),
		level: 17,
		xp: 504,
		hourPer: 0,
		minutePer: 37,
		secondPer: 55,
		input: {
			[itemID('Iron Fiber')]: 20,
			[itemID('Tangleweave Cloth')]: 4
		}
	},
	{
		name: 'Steel Lined Tunic',
		id: itemID('Steel Lined Tunic'),
		level: 27,
		xp: 717,
		hourPer: 0,
		minutePer: 50,
		secondPer: 33,
		input: {
			[itemID('Steel Fiber')]: 20,
			[itemID('Duneweave Cloth')]: 4
		}
	},
	{
		name: 'Mithril Lined Tunic',
		id: itemID('Mithril Lined Tunic'),
		level: 47,
		xp: 926,
		hourPer: 1,
		minutePer: 3,
		secondPer: 11,
		input: {
			[itemID('Mithril Fiber')]: 20,
			[itemID('Mossweave Cloth')]: 4
		}
	},
	{
		name: 'Adamantium Lined Tunic',
		id: itemID('Adamantium Lined Tunic'),
		level: 57,
		xp: 1132,
		hourPer: 1,
		minutePer: 15,
		secondPer: 50,
		input: {
			[itemID('Adamantium Fiber')]: 20,
			[itemID('Rockweave Cloth')]: 4
		}
	},
	{
		name: 'Dianium Lined Tunic',
		id: itemID('Dianium Lined Tunic'),
		level: 67,
		xp: 1346,
		hourPer: 1,
		minutePer: 28,
		secondPer: 28,
		input: {
			[itemID('Dianium Fiber')]: 20,
			[itemID('Frostweave Cloth')]: 4
		}
	}
];

export default Tunic;
