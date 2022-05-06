import itemID from '../../../../util/itemID';
import { Metallurgy } from '../../../types';

const Ingots: Metallurgy[] = [
	{
		name: 'Bronze Ingot',
		id: itemID('Bronze Ingot'),
		level: 1,
		xp: 14,
		timePer: 42,
		inputOres: {
			[itemID('Copper Ore')]: 5,
			[itemID('Tin Ore')]: 5
		}
	},
	{
		name: 'Iron Ingot',
		id: itemID('Iron Ingot'),
		level: 10,
		xp: 26,
		timePer: 63,
		inputOres: {
			[itemID('Iron Ore')]: 10
		}
	},
	{
		name: 'Steel Ingot',
		id: itemID('Steel Ingot'),
		level: 20,
		xp: 75,
		timePer: 168,
		inputOres: {
			[itemID('Iron Ore')]: 10,
			[itemID('Coal')]: 10
		}
	},
	{
		name: 'Silver Bar',
		id: itemID('Silver Bar'),
		level: 30,
		xp: 220,
		timePer: 480,
		inputOres: {
			[itemID('Silver Ore')]: 50
		}
	},
	{
		name: 'Gold Bar',
		id: itemID('Gold Bar'),
		level: 35,
		xp: 250,
		timePer: 540,
		inputOres: {
			[itemID('Gold Ore')]: 50
		}
	},
	{
		name: 'Mithril Ingot',
		id: itemID('Mithril Ingot'),
		level: 40,
		xp: 120,
		timePer: 269,
		inputOres: {
			[itemID('Mithril Ore')]: 10,
			[itemID('Coal')]: 15
		}
	},
	{
		name: 'Adamantium Ingot',
		id: itemID('Adamantium Ingot'),
		level: 50,
		xp: 177,
		timePer: 379,
		inputOres: {
			[itemID('Adamantium Ore')]: 10,
			[itemID('Coal')]: 20
		}
	},
	{
		name: 'Dianium Ingot',
		id: itemID('Dianium Ingot'),
		level: 60,
		xp: 246,
		timePer: 516,
		inputOres: {
			[itemID('Dianium Ore')]: 10,
			[itemID('Coal')]: 25
		}
	},
	{
		name: 'Platinum Bar',
		id: itemID('Platinum Ingot'),
		level: 70,
		xp: 460,
		timePer: 16 * 60,
		inputOres: {
			[itemID('Platinum Ore')]: 50
		}
	}
];

export default Ingots;
