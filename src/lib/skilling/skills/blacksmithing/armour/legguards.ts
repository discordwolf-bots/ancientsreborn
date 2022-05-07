import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const LegGuards: Production[] = [
	{
		name: 'Bronze Plated Leg Guards',
		id: itemID('Bronze Plated Leg Guards'),
		level: 7,
		xp: 336,
		hourPer: 0,
		minutePer: 30,
		secondPer: 54,
		input: {
			[itemID('Bronze Ingot')]: 8
		}
	},
	{
		name: 'Iron Plated Leg Guards',
		id: itemID('Iron Plated Leg Guards'),
		level: 16,
		xp: 629,
		hourPer: 0,
		minutePer: 47,
		secondPer: 42,
		input: {
			[itemID('Iron Ingot')]: 8
		}
	},
	{
		name: 'Steel Plated Leg Guards',
		id: itemID('Steel Plated Leg Guards'),
		level: 26,
		xp: 894,
		hourPer: 1,
		minutePer: 3,
		secondPer: 36,
		input: {
			[itemID('Steel Ingot')]: 8
		}
	},
	{
		name: 'Mithril Plated Leg Guards',
		id: itemID('Mithril Plated Leg Guards'),
		level: 46,
		xp: 1155,
		hourPer: 1,
		minutePer: 19,
		secondPer: 30,
		input: {
			[itemID('Mithril Ingot')]: 8
		}
	},
	{
		name: 'Adamantium Plated Leg Guards',
		id: itemID('Adamantium Plated Leg Guards'),
		level: 56,
		xp: 1412,
		hourPer: 1,
		minutePer: 35,
		secondPer: 24,
		input: {
			[itemID('Adamantium Ingot')]: 8
		}
	},
	{
		name: 'Dianium Plated Leg Guards',
		id: itemID('Dianium Plated Leg Guards'),
		level: 66,
		xp: 1680,
		hourPer: 1,
		minutePer: 51,
		secondPer: 18,
		input: {
			[itemID('Dianium Ingot')]: 8
		}
	}
];

export default LegGuards;
