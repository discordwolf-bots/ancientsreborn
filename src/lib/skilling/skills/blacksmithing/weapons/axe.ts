import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Axe: Production[] = [
	{
		name: 'Bronze Axe',
		id: itemID('Bronze Axe'),
		level: 10,
		xp: 354,
		minutePer: 31,
		secondPer: 24,
		input: {
			[itemID('Bronze Ingot')]: 8
		}
	},
	{
		name: 'Iron Axe',
		id: itemID('Iron Axe'),
		level: 19,
		xp: 663,
		minutePer: 49,
		secondPer: 3,
		input: {
			[itemID('Iron Ingot')]: 8
		}
	},
	{
		name: 'Steel Axe',
		id: itemID('Steel Axe'),
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
		name: 'Mithril Axe',
		id: itemID('Mithril Axe'),
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
		name: 'Adamantium Axe',
		id: itemID('Adamantium Axe'),
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
		name: 'Dianium Axe',
		id: itemID('Dianium Axe'),
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

export default Axe;
