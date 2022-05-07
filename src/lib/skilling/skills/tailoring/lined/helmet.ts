import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Helmet: Production[] = [
	{
		name: 'Bronze Lined Helmet',
		id: itemID('Bronze Lined Helmet'),
		level: 5,
		xp: 127,
		hourPer: 0,
		minutePer: 12,
		secondPer: 2,
		input: {
			[itemID('Bronze Fiber')]: 10,
			[itemID('Moonweave Cloth')]: 2
		}
	},
	{
		name: 'Iron Lined Helmet',
		id: itemID('Iron Lined Helmet'),
		level: 14,
		xp: 238,
		hourPer: 0,
		minutePer: 18,
		secondPer: 25,
		input: {
			[itemID('Iron Fiber')]: 10,
			[itemID('Tangleweave Cloth')]: 2
		}
	},
	{
		name: 'Steel Lined Helmet',
		id: itemID('Steel Lined Helmet'),
		level: 24,
		xp: 339,
		hourPer: 0,
		minutePer: 24,
		secondPer: 34,
		input: {
			[itemID('Steel Fiber')]: 10,
			[itemID('Duneweave Cloth')]: 2
		}
	},
	{
		name: 'Mithril Lined Helmet',
		id: itemID('Mithril Lined Helmet'),
		level: 44,
		xp: 438,
		hourPer: 0,
		minutePer: 30,
		secondPer: 42,
		input: {
			[itemID('Mithril Fiber')]: 10,
			[itemID('Mossweave Cloth')]: 2
		}
	},
	{
		name: 'Adamantium Lined Helmet',
		id: itemID('Adamantium Lined Helmet'),
		level: 54,
		xp: 536,
		hourPer: 0,
		minutePer: 36,
		secondPer: 51,
		input: {
			[itemID('Adamantium Fiber')]: 10,
			[itemID('Rockweave Cloth')]: 2
		}
	},
	{
		name: 'Dianium Lined Helmet',
		id: itemID('Dianium Lined Helmet'),
		level: 64,
		xp: 637,
		hourPer: 0,
		minutePer: 42,
		secondPer: 59,
		input: {
			[itemID('Dianium Fiber')]: 10,
			[itemID('Frostweave Cloth')]: 2
		}
	}
];

export default Helmet;
