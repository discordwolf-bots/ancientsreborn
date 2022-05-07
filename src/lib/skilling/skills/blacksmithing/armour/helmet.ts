import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Helmet: Production[] = [
	{
		name: 'Bronze Plated Helmet',
		id: itemID('Bronze Plated Helmet'),
		level: 5,
		xp: 162,
		hourPer: 0,
		minutePer: 15,
		secondPer: 18,
		input: {
			[itemID('Bronze Ingot')]: 4
		}
	},
	{
		name: 'Iron Plated Helmet',
		id: itemID('Iron Plated Helmet'),
		level: 14,
		xp: 303,
		hourPer: 0,
		minutePer: 23,
		secondPer: 24,
		input: {
			[itemID('Iron Ingot')]: 4
		}
	},
	{
		name: 'Steel Plated Helmet',
		id: itemID('Steel Plated Helmet'),
		level: 24,
		xp: 431,
		hourPer: 0,
		minutePer: 31,
		secondPer: 12,
		input: {
			[itemID('Steel Ingot')]: 4
		}
	},
	{
		name: 'Mithril Plated Helmet',
		id: itemID('Mithril Plated Helmet'),
		level: 44,
		xp: 557,
		hourPer: 0,
		minutePer: 39,
		secondPer: 0,
		input: {
			[itemID('Mithril Ingot')]: 4
		}
	},
	{
		name: 'Adamantium Plated Helmet',
		id: itemID('Adamantium Plated Helmet'),
		level: 54,
		xp: 680,
		hourPer: 0,
		minutePer: 46,
		secondPer: 48,
		input: {
			[itemID('Adamantium Ingot')]: 4
		}
	},
	{
		name: 'Dianium Plated Helmet',
		id: itemID('Dianium Plated Helmet'),
		level: 64,
		xp: 810,
		hourPer: 0,
		minutePer: 54,
		secondPer: 36,
		input: {
			[itemID('Dianium Ingot')]: 4
		}
	}
];

export default Helmet;
