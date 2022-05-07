import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Belt: Production[] = [
	{
		name: 'Bronze Plated Belt',
		id: itemID('Bronze Plated Belt'),
		level: 1,
		xp: 75,
		hourPer: 0,
		minutePer: 7,
		secondPer: 30,
		input: {
			[itemID('Bronze Ingot')]: 2
		}
	},
	{
		name: 'Iron Plated Belt',
		id: itemID('Iron Plated Belt'),
		level: 10,
		xp: 140,
		hourPer: 0,
		minutePer: 11,
		secondPer: 15,
		input: {
			[itemID('Iron Ingot')]: 2
		}
	},
	{
		name: 'Steel Plated Belt',
		id: itemID('Steel Plated Belt'),
		level: 20,
		xp: 199,
		hourPer: 0,
		minutePer: 15,
		secondPer: 0,
		input: {
			[itemID('Steel Ingot')]: 2
		}
	},
	{
		name: 'Mithril Plated Belt',
		id: itemID('Mithril Plated Belt'),
		level: 40,
		xp: 258,
		hourPer: 0,
		minutePer: 18,
		secondPer: 45,
		input: {
			[itemID('Mithril Ingot')]: 2
		}
	},
	{
		name: 'Adamantium Plated Belt',
		id: itemID('Adamantium Plated Belt'),
		level: 50,
		xp: 315,
		hourPer: 0,
		minutePer: 22,
		secondPer: 30,
		input: {
			[itemID('Adamantium Ingot')]: 2
		}
	},
	{
		name: 'Dianium Plated Belt',
		id: itemID('Dianium Plated Belt'),
		level: 60,
		xp: 375,
		hourPer: 0,
		minutePer: 26,
		secondPer: 15,
		input: {
			[itemID('Dianium Ingot')]: 2
		}
	}
];

export default Belt;
