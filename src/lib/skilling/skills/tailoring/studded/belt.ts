import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Belt: Production[] = [
	{
		name: 'Bronze Studded Belt',
		id: itemID('Bronze Studded Belt'),
		level: 1,
		xp: 105,
		hourPer: 0,
		minutePer: 10,
		secondPer: 35,
		input: {
			[itemID('Bronze Fiber')]: 5,
			[itemID('Bronze Studs')]: 1,
			[itemID('Light Leather')]: 5
		}
	},
	{
		name: 'Iron Studded Belt',
		id: itemID('Iron Studded Belt'),
		level: 10,
		xp: 198,
		hourPer: 0,
		minutePer: 15,
		secondPer: 53,
		input: {
			[itemID('Iron Fiber')]: 5,
			[itemID('Iron Studs')]: 1,
			[itemID('Medium Leather')]: 5
		}
	},
	{
		name: 'Steel Studded Belt',
		id: itemID('Steel Studded Belt'),
		level: 20,
		xp: 282,
		hourPer: 0,
		minutePer: 21,
		secondPer: 11,
		input: {
			[itemID('Steel Fiber')]: 5,
			[itemID('Steel Studs')]: 1,
			[itemID('Sturdy Leather')]: 5
		}
	},
	{
		name: 'Mithril Studded Belt',
		id: itemID('Mithril Studded Belt'),
		level: 40,
		xp: 364,
		hourPer: 0,
		minutePer: 26,
		secondPer: 29,
		input: {
			[itemID('Mithril Fiber')]: 5,
			[itemID('Mithril Studs')]: 1,
			[itemID('Fine Leather')]: 5
		}
	},
	{
		name: 'Adamantium Studded Belt',
		id: itemID('Adamantium Studded Belt'),
		level: 50,
		xp: 445,
		hourPer: 0,
		minutePer: 31,
		secondPer: 46,
		input: {
			[itemID('Adamantium Fiber')]: 5,
			[itemID('Adamantium Studs')]: 1,
			[itemID('Exceptional Leather')]: 5
		}
	},
	{
		name: 'Dianium Studded Belt',
		id: itemID('Dianium Studded Belt'),
		level: 60,
		xp: 529,
		hourPer: 0,
		minutePer: 37,
		secondPer: 4,
		input: {
			[itemID('Dianium Fiber')]: 5,
			[itemID('Dianium Studs')]: 1,
			[itemID('Pristine Leather')]: 5
		}
	}
];

export default Belt;
