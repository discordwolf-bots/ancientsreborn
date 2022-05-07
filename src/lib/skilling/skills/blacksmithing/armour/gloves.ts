import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Gloves: Production[] = [
	{
		name: 'Bronze Plated Gloves',
		id: itemID('Bronze Plated Gloves'),
		level: 3,
		xp: 156,
		hourPer: 0,
		minutePer: 15,
		secondPer: 9,
		input: {
			[itemID('Bronze Ingot')]: 4
		}
	},
	{
		name: 'Iron Plated Gloves',
		id: itemID('Iron Plated Gloves'),
		level: 12,
		xp: 292,
		hourPer: 0,
		minutePer: 22,
		secondPer: 57,
		input: {
			[itemID('Iron Ingot')]: 4
		}
	},
	{
		name: 'Steel Plated Gloves',
		id: itemID('Steel Plated Gloves'),
		level: 22,
		xp: 415,
		hourPer: 0,
		minutePer: 30,
		secondPer: 36,
		input: {
			[itemID('Steel Ingot')]: 4
		}
	},
	{
		name: 'Mithril Plated Gloves',
		id: itemID('Mithril Plated Gloves'),
		level: 42,
		xp: 536,
		hourPer: 0,
		minutePer: 38,
		secondPer: 15,
		input: {
			[itemID('Mithril Ingot')]: 4
		}
	},
	{
		name: 'Adamantium Plated Gloves',
		id: itemID('Adamantium Plated Gloves'),
		level: 52,
		xp: 655,
		hourPer: 0,
		minutePer: 45,
		secondPer: 54,
		input: {
			[itemID('Adamantium Ingot')]: 4
		}
	},
	{
		name: 'Dianium Plated Gloves',
		id: itemID('Dianium Plated Gloves'),
		level: 62,
		xp: 780,
		hourPer: 0,
		minutePer: 53,
		secondPer: 33,
		input: {
			[itemID('Dianium Ingot')]: 4
		}
	}
];

export default Gloves;
