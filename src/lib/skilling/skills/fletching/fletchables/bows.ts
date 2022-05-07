import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Bow: Production[] = [
	{
		name: 'Bronze Bow',
		id: itemID('Bronze Bow'),
		level: 7,
		xp: 294,
		hourPer: 0,
		minutePer: 27,
		secondPer: 2,
		input: {
			[itemID('Farwood Bowframe')]: 1,
			[itemID('Bronze Bowstring')]: 1
		}
	},
	{
		name: 'Iron Bow',
		id: itemID('Iron Bow'),
		level: 16,
		xp: 550,
		hourPer: 0,
		minutePer: 41,
		secondPer: 44,
		input: {
			[itemID('Gnarlwood Bowframe')]: 1,
			[itemID('Iron Bowstring')]: 1
		}
	},
	{
		name: 'Steel Bow',
		id: itemID('Steel Bow'),
		level: 26,
		xp: 783,
		hourPer: 0,
		minutePer: 55,
		secondPer: 39,
		input: {
			[itemID('Sandwood Bowframe')]: 1,
			[itemID('Steel Bowstring')]: 1
		}
	},
	{
		name: 'Mithril Bow',
		id: itemID('Mithril Bow'),
		level: 46,
		xp: 1011,
		hourPer: 1,
		minutePer: 9,
		secondPer: 33,
		input: {
			[itemID('Hillpine Bowframe')]: 1,
			[itemID('Mithril Bowstring')]: 1
		}
	},
	{
		name: 'Adamantium Bow',
		id: itemID('Adamantium Bow'),
		level: 56,
		xp: 1235,
		hourPer: 1,
		minutePer: 23,
		secondPer: 28,
		input: {
			[itemID('Ashenwood Bowframe')]: 1,
			[itemID('Adamantium Bowstring')]: 1
		}
	},
	{
		name: 'Dianium Bow',
		id: itemID('Dianium Bow'),
		level: 66,
		xp: 1470,
		hourPer: 1,
		minutePer: 37,
		secondPer: 23,
		input: {
			[itemID('Frostscarred Bowframe')]: 1,
			[itemID('Dianium Bowstring')]: 1
		}
	}
];

export default Bow;
