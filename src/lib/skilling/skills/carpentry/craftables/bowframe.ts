import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Bowframe: Production[] = [
	{
		name: 'Farwood Bowframe',
		id: itemID('Farwood Bowframe'),
		level: 7,
		xp: 42,
		hourPer: 0,
		minutePer: 1,
		secondPer: 56,
		input: {
			[itemID('Farwood Log')]: 20
		}
	},
	{
		name: 'Gnarlwood Bowframe',
		id: itemID('Gnarlwood Bowframe'),
		level: 17,
		xp: 100,
		hourPer: 0,
		minutePer: 3,
		secondPer: 45,
		input: {
			[itemID('Gnarlwood Log')]: 25
		}
	},
	{
		name: 'Sandwood Bowframe',
		id: itemID('Sandwood Bowframe'),
		level: 27,
		xp: 171,
		hourPer: 0,
		minutePer: 6,
		secondPer: 1,
		input: {
			[itemID('Sandwood Log')]: 30
		}
	},
	{
		name: 'Hillpine Bowframe',
		id: itemID('Hillpine Bowframe'),
		level: 47,
		xp: 257,
		hourPer: 0,
		minutePer: 8,
		secondPer: 44,
		input: {
			[itemID('Hillpine Log')]: 35
		}
	},
	{
		name: 'Ashenwood Bowframe',
		id: itemID('Ashenwood Bowframe'),
		level: 57,
		xp: 359,
		hourPer: 0,
		minutePer: 12,
		secondPer: 2,
		input: {
			[itemID('Ashenwood Log')]: 40
		}
	},
	{
		name: 'Frostscarred Bowframe',
		id: itemID('Frostscarred Bowframe'),
		level: 67,
		xp: 2544,
		hourPer: 0,
		minutePer: 17,
		secondPer: 29,
		input: {
			[itemID('Frostscarred Log')]: 50
		}
	}
];

export default Bowframe;
