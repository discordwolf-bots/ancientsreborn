import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Helmet: Production[] = [
	{
		name: 'Bronze Studded Helmet',
		id: itemID('Bronze Studded Helmet'),
		level: 5,
		xp: 147,
		hourPer: 0,
		minutePer: 13,
		secondPer: 57,
		input: {
			[itemID('Bronze Fiber')]: 10,
			[itemID('Bronze Studs')]: 1,
			[itemID('Light Leather')]: 10
		}
	},
	{
		name: 'Iron Studded Helmet',
		id: itemID('Iron Studded Helmet'),
		level: 14,
		xp: 276,
		hourPer: 0,
		minutePer: 21,
		secondPer: 21,
		input: {
			[itemID('Iron Fiber')]: 10,
			[itemID('Iron Studs')]: 1,
			[itemID('Medium Leather')]: 10
		}
	},
	{
		name: 'Steel Studded Helmet',
		id: itemID('Steel Studded Helmet'),
		level: 24,
		xp: 393,
		hourPer: 0,
		minutePer: 28,
		secondPer: 28,
		input: {
			[itemID('Steel Fiber')]: 10,
			[itemID('Steel Studs')]: 1,
			[itemID('Sturdy Leather')]: 10
		}
	},
	{
		name: 'Mithril Studded Helmet',
		id: itemID('Mithril Studded Helmet'),
		level: 44,
		xp: 508,
		hourPer: 0,
		minutePer: 35,
		secondPer: 35,
		input: {
			[itemID('Mithril Fiber')]: 10,
			[itemID('Mithril Studs')]: 1,
			[itemID('Fine Leather')]: 10
		}
	},
	{
		name: 'Adamantium Studded Helmet',
		id: itemID('Adamantium Studded Helmet'),
		level: 54,
		xp: 621,
		hourPer: 0,
		minutePer: 42,
		secondPer: 42,
		input: {
			[itemID('Adamantium Fiber')]: 10,
			[itemID('Adamantium Studs')]: 1,
			[itemID('Exceptional Leather')]: 10
		}
	},
	{
		name: 'Dianium Studded Helmet',
		id: itemID('Dianium Studded Helmet'),
		level: 64,
		xp: 739,
		hourPer: 0,
		minutePer: 49,
		secondPer: 49,
		input: {
			[itemID('Dianium Fiber')]: 10,
			[itemID('Dianium Studs')]: 1,
			[itemID('Pristine Leather')]: 10
		}
	}
];

export default Helmet;
