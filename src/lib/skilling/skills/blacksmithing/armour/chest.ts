import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Chestpiece: Production[] = [
	{
		name: 'Bronze Plated Chestpiece',
		id: itemID('Bronze Plated Chestpiece'),
		level: 8,
		xp: 342,
		hourPer: 0,
		minutePer: 31,
		secondPer: 3,
		input: {
			[itemID('Bronze Ingot')]: 8
		}
	},
	{
		name: 'Iron Plated Chestpiece',
		id: itemID('Iron Plated Chestpiece'),
		level: 11,
		xp: 640,
		hourPer: 0,
		minutePer: 48,
		secondPer: 9,
		input: {
			[itemID('Iron Ingot')]: 8
		}
	},
	{
		name: 'Steel Plated Chestpiece',
		id: itemID('Steel Plated Chestpiece'),
		level: 21,
		xp: 910,
		hourPer: 1,
		minutePer: 4,
		secondPer: 12,
		input: {
			[itemID('Steel Ingot')]: 8
		}
	},
	{
		name: 'Mithril Plated Chestpiece',
		id: itemID('Mithril Plated Chestpiece'),
		level: 41,
		xp: 1176,
		hourPer: 1,
		minutePer: 20,
		secondPer: 15,
		input: {
			[itemID('Mithril Ingot')]: 8
		}
	},
	{
		name: 'Adamantium Plated Chestpiece',
		id: itemID('Adamantium Plated Chestpiece'),
		level: 51,
		xp: 1437,
		hourPer: 1,
		minutePer: 36,
		secondPer: 18,
		input: {
			[itemID('Adamantium Ingot')]: 8
		}
	},
	{
		name: 'Dianium Plated Chestpiece',
		id: itemID('Dianium Plated Chestpiece'),
		level: 61,
		xp: 1710,
		hourPer: 1,
		minutePer: 52,
		secondPer: 21,
		input: {
			[itemID('Dianium Ingot')]: 8
		}
	}
];

export default Chestpiece;
