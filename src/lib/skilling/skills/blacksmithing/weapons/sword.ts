import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Sword: Production[] = [
	{
		name: 'Bronze Sword',
		id: itemID('Bronze Sword'),
		level: 10,
		xp: 177,
		minutePer: 15,
		secondPer: 40,
		input: {
			[itemID('Bronze Ingot')]: 4
		}
	},
	{
		name: 'Iron Sword',
		id: itemID('Iron Sword'),
		level: 19,
		xp: 331,
		minutePer: 24,
		secondPer: 31,
		input: {
			[itemID('Iron Ingot')]: 4
		}
	},
	{
		name: 'Steel Sword',
		id: itemID('Steel Sword'),
		level: 29,
		xp: 471,
		minutePer: 32,
		secondPer: 42,
		input: {
			[itemID('Steel Ingot')]: 4
		}
	},
	{
		name: 'Mithril Sword',
		id: itemID('Mithril Sword'),
		level: 49,
		xp: 608,
		minutePer: 40,
		secondPer: 52,
		input: {
			[itemID('Mithril Ingot')]: 4
		}
	},
	{
		name: 'Adamantium Sword',
		id: itemID('Adamantium Sword'),
		level: 59,
		xp: 743,
		minutePer: 49,
		secondPer: 3,
		input: {
			[itemID('Adamantium Ingot')]: 4
		}
	},
	{
		name: 'Dianium Sword',
		id: itemID('Dianium Sword'),
		level: 69,
		xp: 885,
		minutePer: 57,
		secondPer: 13,
		input: {
			[itemID('Dianium Ingot')]: 4
		}
	}
];

export default Sword;
