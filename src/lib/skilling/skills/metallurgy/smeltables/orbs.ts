import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Orb: Production[] = [
	{
		name: 'Bronze Orb',
		id: itemID('Bronze Orb'),
		level: 10,
		xp: 82,
		hourPer: 0,
		minutePer: 3,
		secondPer: 52,
		input: {
			[itemID('Copper Ore')]: 25,
			[itemID('Tin Ore')]: 25
		}
	},
	{
		name: 'Iron Orb',
		id: itemID('Iron Orb'),
		level: 19,
		xp: 124,
		hourPer: 0,
		minutePer: 4,
		secondPer: 46,
		input: {
			[itemID('Iron Ore')]: 40
		}
	},
	{
		name: 'Steel Orb',
		id: itemID('Steel Orb'),
		level: 29,
		xp: 354,
		hourPer: 0,
		minutePer: 12,
		secondPer: 36,
		input: {
			[itemID('Iron Ore')]: 40,
			[itemID('Coal')]: 40
		}
	},
	{
		name: 'Mithril Orb',
		id: itemID('Mithril Orb'),
		level: 49,
		xp: 570,
		hourPer: 0,
		minutePer: 20,
		secondPer: 26,
		input: {
			[itemID('Mithril Ore')]: 50,
			[itemID('Coal')]: 50
		}
	},
	{
		name: 'Adamantium Orb',
		id: itemID('Adamantium Orb'),
		level: 59,
		xp: 836,
		hourPer: 0,
		minutePer: 28,
		secondPer: 6,
		input: {
			[itemID('Adamantium Ore')]: 60,
			[itemID('Coal')]: 60
		}
	},
	{
		name: 'Dianium Orb',
		id: itemID('Dianium Orb'),
		level: 69,
		xp: 1161,
		hourPer: 0,
		minutePer: 37,
		secondPer: 33,
		input: {
			[itemID('Dianium Ore')]: 70,
			[itemID('Coal')]: 70
		}
	}
];

export default Orb;
