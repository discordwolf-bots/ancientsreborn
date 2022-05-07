import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Gloves: Production[] = [
	{
		name: 'Bronze Studded Gloves',
		id: itemID('Bronze Studded Gloves'),
		level: 3,
		xp: 142,
		hourPer: 0,
		minutePer: 13,
		secondPer: 49,
		input: {
			[itemID('Bronze Fiber')]: 10,
			[itemID('Bronze Studs')]: 1,
			[itemID('Light Leather')]: 10
		}
	},
	{
		name: 'Iron Studded Gloves',
		id: itemID('Iron Studded Gloves'),
		level: 12,
		xp: 266,
		hourPer: 0,
		minutePer: 20,
		secondPer: 56,
		input: {
			[itemID('Iron Fiber')]: 10,
			[itemID('Iron Studs')]: 1,
			[itemID('Medium Leather')]: 10
		}
	},
	{
		name: 'Steel Studded Gloves',
		id: itemID('Steel Studded Gloves'),
		level: 22,
		xp: 379,
		hourPer: 0,
		minutePer: 27,
		secondPer: 55,
		input: {
			[itemID('Steel Fiber')]: 10,
			[itemID('Steel Studs')]: 1,
			[itemID('Sturdy Leather')]: 10
		}
	},
	{
		name: 'Mithril Studded Gloves',
		id: itemID('Mithril Studded Gloves'),
		level: 42,
		xp: 489,
		hourPer: 0,
		minutePer: 34,
		secondPer: 54,
		input: {
			[itemID('Mithril Fiber')]: 10,
			[itemID('Mithril Studs')]: 1,
			[itemID('Fine Leather')]: 10
		}
	},
	{
		name: 'Adamantium Studded Gloves',
		id: itemID('Adamantium Studded Gloves'),
		level: 52,
		xp: 598,
		hourPer: 0,
		minutePer: 41,
		secondPer: 53,
		input: {
			[itemID('Adamantium Fiber')]: 10,
			[itemID('Adamantium Studs')]: 1,
			[itemID('Exceptional Leather')]: 10
		}
	},
	{
		name: 'Dianium Studded Gloves',
		id: itemID('Dianium Studded Gloves'),
		level: 62,
		xp: 711,
		hourPer: 0,
		minutePer: 48,
		secondPer: 51,
		input: {
			[itemID('Dianium Fiber')]: 10,
			[itemID('Dianium Studs')]: 1,
			[itemID('Pristine Leather')]: 10
		}
	}
];

export default Gloves;
