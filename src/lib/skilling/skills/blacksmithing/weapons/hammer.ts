import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Hammer: Production[] = [
	{
		name: 'Bronze Hammer',
		id: itemID('Bronze Hammer'),
		level: 10,
		xp: 354,
		minutePer: 31,
		secondPer: 24,
		input: {
			[itemID('Bronze Ingot')]: 8
		}
	},
	{
		name: 'Iron Hammer',
		id: itemID('Iron Hammer'),
		level: 19,
		xp: 663,
		minutePer: 49,
		secondPer: 3,
		input: {
			[itemID('Iron Ingot')]: 8
		}
	},
	{
		name: 'Steel Hammer',
		id: itemID('Steel Hammer'),
		level: 29,
		xp: 942,
		hourPer: 1,
		minutePer: 5,
		secondPer: 24,
		input: {
			[itemID('Steel Ingot')]: 8
		}
	},
	{
		name: 'Mithril Hammer',
		id: itemID('Mithril Hammer'),
		level: 49,
		xp: 1217,
		hourPer: 1,
		minutePer: 21,
		secondPer: 45,
		input: {
			[itemID('Mithril Ingot')]: 8
		}
	},
	{
		name: 'Adamantium Hammer',
		id: itemID('Adamantium Hammer'),
		level: 59,
		xp: 1487,
		hourPer: 1,
		minutePer: 38,
		secondPer: 6,
		input: {
			[itemID('Adamantium Ingot')]: 8
		}
	},
	{
		name: 'Dianium Hammer',
		id: itemID('Dianium Hammer'),
		level: 69,
		xp: 1770,
		hourPer: 1,
		minutePer: 54,
		secondPer: 27,
		input: {
			[itemID('Dianium Ingot')]: 8
		}
	}
];

export default Hammer;
