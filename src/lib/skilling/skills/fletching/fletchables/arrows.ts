import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Arrow: Production[] = [
	{
		name: 'Bronze Arrow',
		id: itemID('Bronze Arrow'),
		level: 1,
		xp: 140,
		timePer: 14 * 60 + 3,
		amount: 400,
		input: {
			[itemID('Farwood Arrowshafts')]: 1,
			[itemID('Bronze Arrowheads')]: 1,
			[itemID('Feather')]: 10
		}
	},
	{
		name: 'Iron Arrow',
		id: itemID('Iron Arrow'),
		level: 10,
		xp: 316,
		timePer: 25 * 60 + 18,
		amount: 400,
		input: {
			[itemID('Gnarlwood Arrowshafts')]: 1,
			[itemID('Iron Arrowheads')]: 1,
			[itemID('Feather')]: 20
		}
	},
	{
		name: 'Steel Arrow',
		id: itemID('Steel Arrow'),
		level: 20,
		xp: 523,
		timePer: 39 * 60 + 23,
		amount: 400,
		input: {
			[itemID('Sandwood Arrowshafts')]: 1,
			[itemID('Steel Arrowheads')]: 1,
			[itemID('Feather')]: 30
		}
	},
	{
		name: 'Mithril Arrow',
		id: itemID('Mithril Arrow'),
		level: 40,
		xp: 810,
		timePer: 56 * 60 + 15,
		amount: 400,
		input: {
			[itemID('Hillpine Arrowshafts')]: 1,
			[itemID('Mithril Arrowheads')]: 1,
			[itemID('Feather')]: 40
		}
	},
	{
		name: 'Adamantium Arrow',
		id: itemID('Adamantium Arrow'),
		level: 50,
		xp: 1113,
		timePer: 1 * 3600 + 15 * 60 + 56,
		amount: 400,
		input: {
			[itemID('Ashenwood Arrowshafts')]: 1,
			[itemID('Adamantium Arrowheads')]: 1,
			[itemID('Feather')]: 50
		}
	},
	{
		name: 'Dianium Arrow',
		id: itemID('Dianium Arrow'),
		level: 60,
		xp: 1481,
		timePer: 1 * 3600 + 38 * 60 + 26,
		amount: 400,
		input: {
			[itemID('Frostscarred Arrowshafts')]: 1,
			[itemID('Dianium Arrowheads')]: 1,
			[itemID('Feather')]: 60
		}
	}
];

export default Arrow;
