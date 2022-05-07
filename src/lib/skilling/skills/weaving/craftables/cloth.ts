import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Cloth: Production[] = [
	{
		name: 'Moonweave Cloth',
		id: itemID('Moonweave Cloth'),
		level: 1,
		xp: 35,
		hourPer: 0,
		minutePer: 1,
		secondPer: 46,
		input: {
			[itemID('Moonleaf')]: 1,
			[itemID('Cotton')]: 5
		}
	},
	{
		name: 'Tangleweave Cloth',
		id: itemID('Tangleweave Cloth'),
		level: 10,
		xp: 80,
		hourPer: 0,
		minutePer: 3,
		secondPer: 14,
		input: {
			[itemID('Tanglestrand')]: 1,
			[itemID('Cotton')]: 8
		}
	},
	{
		name: 'Duneweave Cloth',
		id: itemID('Duneweave Cloth'),
		level: 20,
		xp: 209,
		hourPer: 0,
		minutePer: 7,
		secondPer: 52,
		input: {
			[itemID('Duneswelt')]: 2,
			[itemID('Cotton')]: 12
		}
	},
	{
		name: 'Mossweave Cloth',
		id: itemID('Mossweave Cloth'),
		level: 40,
		xp: 387,
		hourPer: 0,
		minutePer: 13,
		secondPer: 15,
		input: {
			[itemID('Mossvine')]: 3,
			[itemID('Cotton')]: 15
		}
	},
	{
		name: 'Rockweave Cloth',
		id: itemID('Rockweave Cloth'),
		level: 50,
		xp: 630,
		hourPer: 0,
		minutePer: 20,
		secondPer: 50,
		input: {
			[itemID('Rockleaf')]: 4,
			[itemID('Cotton')]: 20
		}
	},
	{
		name: 'Frostweave Cloth',
		id: itemID('Frostweave Cloth'),
		level: 60,
		xp: 984,
		hourPer: 0,
		minutePer: 31,
		secondPer: 43,
		input: {
			[itemID('Froststrand')]: 5,
			[itemID('Cotton')]: 30
		}
	}
];

export default Cloth;
