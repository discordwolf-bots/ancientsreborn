import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Boots: Production[] = [
	{
		name: 'Bronze Studded Boots',
		id: itemID('Bronze Studded Boots'),
		level: 2,
		xp: 139,
		hourPer: 0,
		minutePer: 13,
		secondPer: 45,
		input: {
			[itemID('Bronze Fiber')]: 10,
			[itemID('Bronze Studs')]: 1,
			[itemID('Light Leather')]: 10
		}
	},
	{
		name: 'Iron Studded Boots',
		id: itemID('Iron Studded Boots'),
		level: 11,
		xp: 261,
		hourPer: 0,
		minutePer: 20,
		secondPer: 44,
		input: {
			[itemID('Iron Fiber')]: 10,
			[itemID('Iron Studs')]: 1,
			[itemID('Medium Leather')]: 10
		}
	},
	{
		name: 'Steel Studded Boots',
		id: itemID('Steel Studded Boots'),
		level: 21,
		xp: 371,
		hourPer: 0,
		minutePer: 27,
		secondPer: 38,
		input: {
			[itemID('Steel Fiber')]: 10,
			[itemID('Steel Studs')]: 1,
			[itemID('Sturdy Leather')]: 10
		}
	},
	{
		name: 'Mithril Studded Boots',
		id: itemID('Mithril Studded Boots'),
		level: 41,
		xp: 480,
		hourPer: 0,
		minutePer: 34,
		secondPer: 33,
		input: {
			[itemID('Mithril Fiber')]: 10,
			[itemID('Mithril Studs')]: 1,
			[itemID('Fine Leather')]: 10
		}
	},
	{
		name: 'Adamantium Studded Boots',
		id: itemID('Adamantium Studded Boots'),
		level: 51,
		xp: 586,
		hourPer: 0,
		minutePer: 41,
		secondPer: 28,
		input: {
			[itemID('Adamantium Fiber')]: 10,
			[itemID('Adamantium Studs')]: 1,
			[itemID('Exceptional Leather')]: 10
		}
	},
	{
		name: 'Dianium Studded Boots',
		id: itemID('Dianium Studded Boots'),
		level: 61,
		xp: 698,
		hourPer: 0,
		minutePer: 48,
		secondPer: 23,
		input: {
			[itemID('Dianium Fiber')]: 10,
			[itemID('Dianium Studs')]: 1,
			[itemID('Pristine Leather')]: 10
		}
	}
];

export default Boots;
