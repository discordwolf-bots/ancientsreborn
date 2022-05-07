import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Studs: Production[] = [
	{
		name: 'Bronze Studs',
		id: itemID('Bronze Studs'),
		level: 8,
		xp: 32,
		hourPer: 0,
		minutePer: 1,
		secondPer: 32,
		inputOres: {
			[itemID('Copper Ore')]: 10,
			[itemID('Tin Ore')]: 10
		}
	},
	{
		name: 'Iron Studs',
		id: itemID('Iron Studs'),
		level: 17,
		xp: 45,
		hourPer: 0,
		minutePer: 1,
		secondPer: 45,
		inputOres: {
			[itemID('Iron Ore')]: 15
		}
	},
	{
		name: 'Steel Studs',
		id: itemID('Steel Studs'),
		level: 27,
		xp: 128,
		hourPer: 0,
		minutePer: 4,
		secondPer: 38,
		inputOres: {
			[itemID('Iron Ore')]: 20,
			[itemID('Coal')]: 10
		}
	},
	{
		name: 'Mithril Studs',
		id: itemID('Mithril Studs'),
		level: 47,
		xp: 193,
		hourPer: 0,
		minutePer: 7,
		secondPer: 1,
		inputOres: {
			[itemID('Mithril Ore')]: 20,
			[itemID('Coal')]: 15
		}
	},
	{
		name: 'Adamantium Studs',
		id: itemID('Adamantium Studs'),
		level: 57,
		xp: 269,
		hourPer: 0,
		minutePer: 9,
		secondPer: 11,
		inputOres: {
			[itemID('Adamantium Ore')]: 20,
			[itemID('Coal')]: 20
		}
	},
	{
		name: 'Dianium Studs',
		id: itemID('Dianium Studs'),
		level: 67,
		xp: 360,
		hourPer: 0,
		minutePer: 11,
		secondPer: 50,
		inputOres: {
			[itemID('Dianium Ore')]: 20,
			[itemID('Coal')]: 25
		}
	}
];

export default Studs;
