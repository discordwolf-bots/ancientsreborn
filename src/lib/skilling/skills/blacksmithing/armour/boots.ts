import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Boots: Production[] = [
	{
		name: 'Bronze Plated Boots',
		id: itemID('Bronze Plated Boots'),
		level: 2,
		xp: 153,
		hourPer: 0,
		minutePer: 15,
		secondPer: 4,
		input: {
			[itemID('Bronze Ingot')]: 4
		}
	},
	{
		name: 'Iron Plated Boots',
		id: itemID('Iron Plated Boots'),
		level: 11,
		xp: 286,
		hourPer: 0,
		minutePer: 22,
		secondPer: 43,
		input: {
			[itemID('Iron Ingot')]: 4
		}
	},
	{
		name: 'Steel Plated Boots',
		id: itemID('Steel Plated Boots'),
		level: 21,
		xp: 407,
		hourPer: 0,
		minutePer: 30,
		secondPer: 18,
		input: {
			[itemID('Steel Ingot')]: 4
		}
	},
	{
		name: 'Mithril Plated Boots',
		id: itemID('Mithril Plated Boots'),
		level: 41,
		xp: 526,
		hourPer: 0,
		minutePer: 37,
		secondPer: 52,
		input: {
			[itemID('Mithril Ingot')]: 4
		}
	},
	{
		name: 'Adamantium Plated Boots',
		id: itemID('Adamantium Plated Boots'),
		level: 51,
		xp: 643,
		hourPer: 0,
		minutePer: 42,
		secondPer: 27,
		input: {
			[itemID('Adamantium Ingot')]: 4
		}
	},
	{
		name: 'Dianium Plated Boots',
		id: itemID('Dianium Plated Boots'),
		level: 61,
		xp: 765,
		hourPer: 0,
		minutePer: 53,
		secondPer: 1,
		input: {
			[itemID('Dianium Ingot')]: 4
		}
	}
];

export default Boots;
