import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Arrowheads: Production[] = [
	{
		name: 'Bronze Arrowheads',
		id: itemID('Bronze Arrowheads'),
		level: 5,
		xp: 6,
		hourPer: 0,
		minutePer: 0,
		secondPer: 18,
		input: {
			[itemID('Copper Ore')]: 2,
			[itemID('Tin Ore')]: 2
		}
	},
	{
		name: 'Iron Arrowheads',
		id: itemID('Iron Arrowheads'),
		level: 14,
		xp: 11,
		hourPer: 0,
		minutePer: 0,
		secondPer: 27,
		input: {
			[itemID('Iron Ore')]: 4
		}
	},
	{
		name: 'Steel Arrowheads',
		id: itemID('Steel Arrowheads'),
		level: 24,
		xp: 54,
		hourPer: 0,
		minutePer: 0,
		secondPer: 54,
		input: {
			[itemID('Iron Ore')]: 4,
			[itemID('Coal')]: 2
		}
	},
	{
		name: 'Mithril Arrowheads',
		id: itemID('Mithril Arrowheads'),
		level: 44,
		xp: 36,
		hourPer: 0,
		minutePer: 1,
		secondPer: 21,
		input: {
			[itemID('Mithril Ore')]: 4,
			[itemID('Coal')]: 3
		}
	},
	{
		name: 'Adamantium Arrowheads',
		id: itemID('Adamantium Arrowheads'),
		level: 54,
		xp: 51,
		hourPer: 0,
		minutePer: 1,
		secondPer: 47,
		input: {
			[itemID('Adamantium Ore')]: 4,
			[itemID('Coal')]: 4
		}
	},
	{
		name: 'Dianium Arrowheads',
		id: itemID('Dianium Arrowheads'),
		level: 64,
		xp: 68,
		hourPer: 0,
		minutePer: 2,
		secondPer: 18,
		input: {
			[itemID('Dianium Ore')]: 4,
			[itemID('Coal')]: 5
		}
	}
];

export default Arrowheads;
