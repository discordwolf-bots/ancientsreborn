import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Tunic: Production[] = [
	{
		name: 'Bronze Studded Tunic',
		id: itemID('Bronze Studded Tunic'),
		level: 8,
		xp: 312,
		hourPer: 0,
		minutePer: 28,
		secondPer: 19,
		input: {
			[itemID('Bronze Fiber')]: 20,
			[itemID('Bronze Studs')]: 2,
			[itemID('Light Leather')]: 20
		}
	},
	{
		name: 'Iron Studded Tunic',
		id: itemID('Iron Studded Tunic'),
		level: 17,
		xp: 584,
		hourPer: 0,
		minutePer: 43,
		secondPer: 56,
		input: {
			[itemID('Iron Fiber')]: 20,
			[itemID('Iron Studs')]: 2,
			[itemID('Medium Leather')]: 20
		}
	},
	{
		name: 'Steel Studded Tunic',
		id: itemID('Steel Studded Tunic'),
		level: 27,
		xp: 831,
		hourPer: 0,
		minutePer: 58,
		secondPer: 34,
		input: {
			[itemID('Steel Fiber')]: 20,
			[itemID('Steel Studs')]: 2,
			[itemID('Sturdy Leather')]: 20
		}
	},
	{
		name: 'Mithril Studded Tunic',
		id: itemID('Mithril Studded Tunic'),
		level: 47,
		xp: 1073,
		hourPer: 1,
		minutePer: 13,
		secondPer: 13,
		input: {
			[itemID('Mithril Fiber')]: 20,
			[itemID('Mithril Studs')]: 2,
			[itemID('Fine Leather')]: 20
		}
	},
	{
		name: 'Adamantium Studded Tunic',
		id: itemID('Adamantium Studded Tunic'),
		level: 57,
		xp: 1311,
		hourPer: 1,
		minutePer: 27,
		secondPer: 52,
		input: {
			[itemID('Adamantium Fiber')]: 20,
			[itemID('Adamantium Studs')]: 2,
			[itemID('Exceptional Leather')]: 20
		}
	},
	{
		name: 'Dianium Studded Tunic',
		id: itemID('Dianium Studded Tunic'),
		level: 67,
		xp: 1560,
		hourPer: 1,
		minutePer: 42,
		secondPer: 31,
		input: {
			[itemID('Dianium Fiber')]: 20,
			[itemID('Dianium Studs')]: 2,
			[itemID('Pristine Leather')]: 20
		}
	}
];

export default Tunic;
