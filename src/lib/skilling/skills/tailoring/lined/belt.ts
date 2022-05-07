import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Belt: Production[] = [
	{
		name: 'Bronze Lined Belt',
		id: itemID('Bronze Lined Belt'),
		level: 1,
		xp: 59,
		hourPer: 0,
		minutePer: 5,
		secondPer: 54,
		input: {
			[itemID('Bronze Fiber')]: 5,
			[itemID('Moonweave Cloth')]: 1
		}
	},
	{
		name: 'Iron Lined Belt',
		id: itemID('Iron Lined Belt'),
		level: 10,
		xp: 110,
		hourPer: 0,
		minutePer: 8,
		secondPer: 51,
		input: {
			[itemID('Iron Fiber')]: 5,
			[itemID('Tangleweave Cloth')]: 1
		}
	},
	{
		name: 'Steel Lined Belt',
		id: itemID('Steel Lined Belt'),
		level: 20,
		xp: 157,
		hourPer: 0,
		minutePer: 11,
		secondPer: 48,
		input: {
			[itemID('Steel Fiber')]: 5,
			[itemID('Duneweave Cloth')]: 1
		}
	},
	{
		name: 'Mithril Lined Belt',
		id: itemID('Mithril Lined Belt'),
		level: 40,
		xp: 203,
		hourPer: 0,
		minutePer: 14,
		secondPer: 45,
		input: {
			[itemID('Mithril Fiber')]: 5,
			[itemID('Mossweave Cloth')]: 1
		}
	},
	{
		name: 'Adamantium Lined Belt',
		id: itemID('Adamantium Lined Belt'),
		level: 50,
		xp: 248,
		hourPer: 0,
		minutePer: 17,
		secondPer: 43,
		input: {
			[itemID('Adamantium Fiber')]: 5,
			[itemID('Rockweave Cloth')]: 1
		}
	},
	{
		name: 'Dianium Lined Belt',
		id: itemID('Dianium Lined Belt'),
		level: 60,
		xp: 295,
		hourPer: 0,
		minutePer: 20,
		secondPer: 40,
		input: {
			[itemID('Dianium Fiber')]: 5,
			[itemID('Frostweave Cloth')]: 1
		}
	}
];

export default Belt;
