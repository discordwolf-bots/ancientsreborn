import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Arrowshafts: Production[] = [
	{
		name: 'Farwood Arrowshafts',
		id: itemID('Farwood Arrowshafts'),
		level: 1,
		xp: 37,
		hourPer: 0,
		minutePer: 1,
		secondPer: 52,
		input: {
			[itemID('Farwood Log')]: 20
		}
	},
	{
		name: 'Gnarlwood Arrowshafts',
		id: itemID('Gnarlwood Arrowshafts'),
		level: 10,
		xp: 70,
		hourPer: 0,
		minutePer: 2,
		secondPer: 48,
		input: {
			[itemID('Gnarlwood Log')]: 20
		}
	},
	{
		name: 'Sandwood Arrowshafts',
		id: itemID('Sandwood Arrowshafts'),
		level: 20,
		xp: 100,
		hourPer: 0,
		minutePer: 3,
		secondPer: 45,
		input: {
			[itemID('Sandwood Log')]: 20
		}
	},
	{
		name: 'Hillpine Arrowshafts',
		id: itemID('Hillpine Arrowshafts'),
		level: 40,
		xp: 129,
		hourPer: 0,
		minutePer: 4,
		secondPer: 25,
		input: {
			[itemID('Hillpine Log')]: 20
		}
	},
	{
		name: 'Ashenwood Arrowshafts',
		id: itemID('Ashenwood Arrowshafts'),
		level: 50,
		xp: 157,
		hourPer: 0,
		minutePer: 5,
		secondPer: 17,
		input: {
			[itemID('Ashenwood Log')]: 20
		}
	},
	{
		name: 'Frostscarred Arrowshafts',
		id: itemID('Frostscarred Arrowshafts'),
		level: 60,
		xp: 187,
		hourPer: 0,
		minutePer: 17,
		secondPer: 29,
		input: {
			[itemID('Frostscarred Log')]: 20
		}
	}
];

export default Arrowshafts;
