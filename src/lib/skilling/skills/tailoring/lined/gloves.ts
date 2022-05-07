import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Gloves: Production[] = [
	{
		name: 'Bronze Lined Gloves',
		id: itemID('Bronze Lined Gloves'),
		level: 3,
		xp: 122,
		hourPer: 0,
		minutePer: 11,
		secondPer: 55,
		input: {
			[itemID('Bronze Fiber')]: 10,
			[itemID('Moonweave Cloth')]: 2
		}
	},
	{
		name: 'Iron Lined Gloves',
		id: itemID('Iron Lined Gloves'),
		level: 12,
		xp: 230,
		hourPer: 0,
		minutePer: 18,
		secondPer: 4,
		input: {
			[itemID('Iron Fiber')]: 10,
			[itemID('Tangleweave Cloth')]: 2
		}
	},
	{
		name: 'Steel Lined Gloves',
		id: itemID('Steel Lined Gloves'),
		level: 22,
		xp: 327,
		hourPer: 0,
		minutePer: 24,
		secondPer: 5,
		input: {
			[itemID('Steel Fiber')]: 10,
			[itemID('Duneweave Cloth')]: 2
		}
	},
	{
		name: 'Mithril Lined Gloves',
		id: itemID('Mithril Lined Gloves'),
		level: 42,
		xp: 422,
		hourPer: 0,
		minutePer: 30,
		secondPer: 7,
		input: {
			[itemID('Mithril Fiber')]: 10,
			[itemID('Mossweave Cloth')]: 2
		}
	},
	{
		name: 'Adamantium Lined Gloves',
		id: itemID('Adamantium Lined Gloves'),
		level: 52,
		xp: 516,
		hourPer: 0,
		minutePer: 36,
		secondPer: 8,
		input: {
			[itemID('Adamantium Fiber')]: 10,
			[itemID('Rockweave Cloth')]: 2
		}
	},
	{
		name: 'Dianium Lined Gloves',
		id: itemID('Dianium Lined Gloves'),
		level: 62,
		xp: 614,
		hourPer: 0,
		minutePer: 42,
		secondPer: 10,
		input: {
			[itemID('Dianium Fiber')]: 10,
			[itemID('Frostweave Cloth')]: 2
		}
	}
];

export default Gloves;
