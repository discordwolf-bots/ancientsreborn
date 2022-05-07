import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Bowstring: Production[] = [
	{
		name: 'Bronze Bowstring',
		id: itemID('Bronze Bowstring'),
		level: 8,
		xp: 9,
		hourPer: 0,
		minutePer: 0,
		secondPer: 26,
		input: {
			[itemID('Bronze Fiber')]: 30
		}
	},
	{
		name: 'Iron Bowstring',
		id: itemID('Iron Bowstring'),
		level: 17,
		xp: 18,
		hourPer: 0,
		minutePer: 0,
		secondPer: 40,
		input: {
			[itemID('Iron Fiber')]: 30
		}
	},
	{
		name: 'Steel Bowstring',
		id: itemID('Steel Bowstring'),
		level: 27,
		xp: 25,
		hourPer: 0,
		minutePer: 0,
		secondPer: 54,
		input: {
			[itemID('Steel Fiber')]: 30
		}
	},
	{
		name: 'Mithril Bowstring',
		id: itemID('Mithril Bowstring'),
		level: 47,
		xp: 33,
		hourPer: 0,
		minutePer: 1,
		secondPer: 3,
		input: {
			[itemID('Mithril Fiber')]: 30
		}
	},
	{
		name: 'Adamantium Bowstring',
		id: itemID('Adamantium Bowstring'),
		level: 57,
		xp: 40,
		hourPer: 0,
		minutePer: 1,
		secondPer: 16,
		input: {
			[itemID('Adamantium Fiber')]: 30
		}
	},
	{
		name: 'Dianium Bowstring',
		id: itemID('Dianium Bowstring'),
		level: 67,
		xp: 48,
		hourPer: 0,
		minutePer: 1,
		secondPer: 29,
		input: {
			[itemID('Dianium Fiber')]: 30
		}
	}
];

export default Bowstring;
