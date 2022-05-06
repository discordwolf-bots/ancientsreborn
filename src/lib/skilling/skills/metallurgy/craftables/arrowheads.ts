import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Arrowheads: Production[] = [
	{
		name: 'Bronze Arrowheads',
		id: itemID('Bronze Arrowheads'),
		level: 5,
		xp: 6,
		timePer: 18,
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
		timePer: 27,
		input: {
			[itemID('Iron Ore')]: 4
		}
	},
	{
		name: 'Steel Arrowheads',
		id: itemID('Steel Arrowheads'),
		level: 24,
		xp: 54,
		timePer: 54,
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
		timePer: 81,
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
		timePer: 107,
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
		timePer: 138,
		input: {
			[itemID('Dianium Ore')]: 4,
			[itemID('Coal')]: 5
		}
	}
];

export default Arrowheads;
