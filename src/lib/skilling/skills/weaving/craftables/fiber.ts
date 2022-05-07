import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Fiber: Production[] = [
	{
		name: 'Bronze Fiber',
		id: itemID('Bronze Fiber'),
		level: 6,
		xp: 51,
		hourPer: 0,
		minutePer: 2,
		secondPer: 24,
		input: {
			[itemID('Bronze Ingot')]: 2,
			[itemID('Cotton')]: 5
		},
		amount: 100
	},
	{
		name: 'Iron Fiber',
		id: itemID('Iron Fiber'),
		level: 15,
		xp: 115,
		hourPer: 0,
		minutePer: 4,
		secondPer: 25,
		input: {
			[itemID('Iron Ingot')]: 2,
			[itemID('Cotton')]: 10
		},
		amount: 100
	},
	{
		name: 'Steel Fiber',
		id: itemID('Steel Fiber'),
		level: 25,
		xp: 192,
		hourPer: 0,
		minutePer: 6,
		secondPer: 53,
		input: {
			[itemID('Steel Ingot')]: 2,
			[itemID('Cotton')]: 15
		},
		amount: 100
	},
	{
		name: 'Mithril Fiber',
		id: itemID('Mithril Fiber'),
		level: 45,
		xp: 319,
		hourPer: 0,
		minutePer: 10,
		secondPer: 26,
		input: {
			[itemID('Mithril Ingot')]: 2,
			[itemID('Cotton')]: 25
		},
		amount: 100
	},
	{
		name: 'Adamantium Fiber',
		id: itemID('Adamantium Fiber'),
		level: 55,
		xp: 606,
		hourPer: 0,
		minutePer: 19,
		secondPer: 26,
		input: {
			[itemID('Adamantium Ingot')]: 2,
			[itemID('Cotton')]: 50
		},
		amount: 100
	},
	{
		name: 'Dianium Fiber',
		id: itemID('Dianium Fiber'),
		level: 65,
		xp: 979,
		hourPer: 0,
		minutePer: 30,
		secondPer: 45,
		input: {
			[itemID('Dianium Ingot')]: 2,
			[itemID('Cotton')]: 75
		},
		amount: 100
	}
];

export default Fiber;
