import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Ingots: Production[] = [
	{
		name: 'Bronze Ingot',
		id: itemID('Bronze Ingot'),
		level: 1,
		xp: 14,
		hourPer: 0,
		minutePer: 0,
		secondPer: 42,
		input: {
			[itemID('Copper Ore')]: 5,
			[itemID('Tin Ore')]: 5
		}
	},
	{
		name: 'Iron Ingot',
		id: itemID('Iron Ingot'),
		level: 10,
		xp: 26,
		hourPer: 0,
		minutePer: 1,
		secondPer: 3,
		input: {
			[itemID('Iron Ore')]: 10
		}
	},
	{
		name: 'Steel Ingot',
		id: itemID('Steel Ingot'),
		level: 20,
		xp: 75,
		hourPer: 0,
		minutePer: 2,
		secondPer: 48,
		input: {
			[itemID('Iron Ore')]: 10,
			[itemID('Coal')]: 10
		}
	},
	{
		name: 'Silver Bar',
		id: itemID('Silver Bar'),
		level: 30,
		xp: 220,
		hourPer: 0,
		minutePer: 8,
		secondPer: 0,
		input: {
			[itemID('Silver Ore')]: 50
		}
	},
	{
		name: 'Gold Bar',
		id: itemID('Gold Bar'),
		level: 35,
		xp: 250,
		hourPer: 0,
		minutePer: 9,
		secondPer: 0,
		input: {
			[itemID('Gold Ore')]: 50
		}
	},
	{
		name: 'Mithril Ingot',
		id: itemID('Mithril Ingot'),
		level: 40,
		xp: 120,
		hourPer: 0,
		minutePer: 4,
		secondPer: 29,
		input: {
			[itemID('Mithril Ore')]: 10,
			[itemID('Coal')]: 15
		}
	},
	{
		name: 'Adamantium Ingot',
		id: itemID('Adamantium Ingot'),
		level: 50,
		xp: 177,
		hourPer: 0,
		minutePer: 6,
		secondPer: 19,
		input: {
			[itemID('Adamantium Ore')]: 10,
			[itemID('Coal')]: 20
		}
	},
	{
		name: 'Dianium Ingot',
		id: itemID('Dianium Ingot'),
		level: 60,
		xp: 246,
		hourPer: 0,
		minutePer: 8,
		secondPer: 36,
		input: {
			[itemID('Dianium Ore')]: 10,
			[itemID('Coal')]: 25
		}
	},
	{
		name: 'Platinum Bar',
		id: itemID('Platinum Ingot'),
		level: 70,
		xp: 460,
		hourPer: 0,
		minutePer: 16,
		secondPer: 0,
		input: {
			[itemID('Platinum Ore')]: 50
		}
	}
];

export default Ingots;
