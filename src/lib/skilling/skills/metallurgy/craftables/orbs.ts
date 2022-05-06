import itemID from '../../../../util/itemID';
import { Metallurgy } from '../../../types';

const Orb: Metallurgy[] = [
	{
		name: 'Bronze Orb',
		id: itemID('Bronze Orb'),
		level: 10,
		xp: 82,
		timePer: 3 * 60 + 52,
		inputOres: {
			[itemID('Copper Ore')]: 25,
			[itemID('Tin Ore')]: 25
		}
	},
	{
		name: 'Iron Orb',
		id: itemID('Iron Orb'),
		level: 19,
		xp: 124,
		timePer: 4 * 60 + 46,
		inputOres: {
			[itemID('Iron Ore')]: 40
		}
	},
	{
		name: 'Steel Orb',
		id: itemID('Steel Orb'),
		level: 29,
		xp: 354,
		timePer: 12 * 60 + 36,
		inputOres: {
			[itemID('Iron Ore')]: 40,
			[itemID('Coal')]: 40
		}
	},
	{
		name: 'Mithril Orb',
		id: itemID('Mithril Orb'),
		level: 49,
		xp: 570,
		timePer: 20 * 60 + 26,
		inputOres: {
			[itemID('Mithril Ore')]: 50,
			[itemID('Coal')]: 50
		}
	},
	{
		name: 'Adamantium Orb',
		id: itemID('Adamantium Orb'),
		level: 59,
		xp: 836,
		timePer: 28 * 60 + 6,
		inputOres: {
			[itemID('Adamantium Ore')]: 60,
			[itemID('Coal')]: 60
		}
	},
	{
		name: 'Dianium Orb',
		id: itemID('Dianium Orb'),
		level: 69,
		xp: 1161,
		timePer: 37 * 60 + 33,
		inputOres: {
			[itemID('Dianium Ore')]: 70,
			[itemID('Coal')]: 70
		}
	}
];

export default Orb;
