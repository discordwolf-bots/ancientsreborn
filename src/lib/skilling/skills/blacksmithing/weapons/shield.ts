import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Shield: Production[] = [
	{
		name: 'Bronze Shield',
		id: itemID('Bronze Shield'),
		level: 9,
		xp: 174,
		minutePer: 15,
		secondPer: 36,
		input: {
			[itemID('Bronze Ingot')]: 4
		}
	},
	{
		name: 'Iron Shield',
		id: itemID('Iron Shield'),
		level: 18,
		xp: 325,
		minutePer: 24,
		secondPer: 18,
		input: {
			[itemID('Iron Ingot')]: 4
		}
	},
	{
		name: 'Steel Shield',
		id: itemID('Steel Shield'),
		level: 28,
		xp: 463,
		minutePer: 32,
		secondPer: 24,
		input: {
			[itemID('Steel Ingot')]: 4
		}
	},
	{
		name: 'Mithril Shield',
		id: itemID('Mithril Shield'),
		level: 48,
		xp: 598,
		minutePer: 40,
		secondPer: 30,
		input: {
			[itemID('Mithril Ingot')]: 4
		}
	},
	{
		name: 'Adamantium Shield',
		id: itemID('Adamantium Shield'),
		level: 58,
		xp: 731,
		minutePer: 48,
		secondPer: 36,
		input: {
			[itemID('Adamantium Ingot')]: 4
		}
	},
	{
		name: 'Dianium Shield',
		id: itemID('Dianium Shield'),
		level: 68,
		xp: 870,
		minutePer: 56,
		secondPer: 42,
		input: {
			[itemID('Dianium Ingot')]: 4
		}
	}
];

export default Shield;
