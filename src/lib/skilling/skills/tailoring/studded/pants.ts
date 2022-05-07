import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Pants: Production[] = [
	{
		name: 'Bronze Studded Pants',
		id: itemID('Bronze Studded Pants'),
		level: 7,
		xp: 306,
		hourPer: 0,
		minutePer: 28,
		secondPer: 11,
		input: {
			[itemID('Bronze Fiber')]: 20,
			[itemID('Bronze Studs')]: 2,
			[itemID('Light Leather')]: 20
		}
	},
	{
		name: 'Iron Studded Pants',
		id: itemID('Iron Studded Pants'),
		level: 16,
		xp: 574,
		hourPer: 0,
		minutePer: 43,
		secondPer: 31,
		input: {
			[itemID('Iron Fiber')]: 20,
			[itemID('Iron Studs')]: 2,
			[itemID('Medium Leather')]: 20
		}
	},
	{
		name: 'Steel Studded Pants',
		id: itemID('Steel Studded Pants'),
		level: 26,
		xp: 816,
		hourPer: 0,
		minutePer: 58,
		secondPer: 2,
		input: {
			[itemID('Steel Fiber')]: 20,
			[itemID('Steel Studs')]: 2,
			[itemID('Sturdy Leather')]: 20
		}
	},
	{
		name: 'Mithril Studded Pants',
		id: itemID('Mithril Studded Pants'),
		level: 46,
		xp: 1054,
		hourPer: 1,
		minutePer: 12,
		secondPer: 32,
		input: {
			[itemID('Mithril Fiber')]: 20,
			[itemID('Mithril Studs')]: 2,
			[itemID('Fine Leather')]: 20
		}
	},
	{
		name: 'Adamantium Studded Pants',
		id: itemID('Adamantium Studded Pants'),
		level: 56,
		xp: 1288,
		hourPer: 1,
		minutePer: 27,
		secondPer: 3,
		input: {
			[itemID('Adamantium Fiber')]: 20,
			[itemID('Adamantium Studs')]: 2,
			[itemID('Exceptional Leather')]: 20
		}
	},
	{
		name: 'Dianium Studded Pants',
		id: itemID('Dianium Studded Pants'),
		level: 66,
		xp: 1533,
		hourPer: 1,
		minutePer: 41,
		secondPer: 33,
		input: {
			[itemID('Dianium Fiber')]: 20,
			[itemID('Dianium Studs')]: 2,
			[itemID('Pristine Leather')]: 20
		}
	}
];

export default Pants;
