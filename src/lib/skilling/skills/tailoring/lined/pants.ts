import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Pants: Production[] = [
	{
		name: 'Bronze Lined Pants',
		id: itemID('Bronze Lined Pants'),
		level: 7,
		xp: 264,
		hourPer: 0,
		minutePer: 24,
		secondPer: 20,
		input: {
			[itemID('Bronze Fiber')]: 20,
			[itemID('Moonweave Cloth')]: 4
		}
	},
	{
		name: 'Iron Lined Pants',
		id: itemID('Iron Lined Pants'),
		level: 16,
		xp: 495,
		hourPer: 0,
		minutePer: 37,
		secondPer: 33,
		input: {
			[itemID('Iron Fiber')]: 20,
			[itemID('Tangleweave Cloth')]: 4
		}
	},
	{
		name: 'Steel Lined Pants',
		id: itemID('Steel Lined Pants'),
		level: 26,
		xp: 704,
		hourPer: 0,
		minutePer: 50,
		secondPer: 5,
		input: {
			[itemID('Steel Fiber')]: 20,
			[itemID('Duneweave Cloth')]: 4
		}
	},
	{
		name: 'Mithril Lined Pants',
		id: itemID('Mithril Lined Pants'),
		level: 46,
		xp: 910,
		hourPer: 1,
		minutePer: 2,
		secondPer: 36,
		input: {
			[itemID('Mithril Fiber')]: 20,
			[itemID('Mossweave Cloth')]: 4
		}
	},
	{
		name: 'Adamantium Lined Pants',
		id: itemID('Adamantium Lined Pants'),
		level: 56,
		xp: 1112,
		hourPer: 1,
		minutePer: 15,
		secondPer: 7,
		input: {
			[itemID('Adamantium Fiber')]: 20,
			[itemID('Rockweave Cloth')]: 4
		}
	},
	{
		name: 'Dianium Lined Pants',
		id: itemID('Dianium Lined Pants'),
		level: 66,
		xp: 1323,
		hourPer: 1,
		minutePer: 27,
		secondPer: 38,
		input: {
			[itemID('Dianium Fiber')]: 20,
			[itemID('Frostweave Cloth')]: 4
		}
	}
];

export default Pants;
