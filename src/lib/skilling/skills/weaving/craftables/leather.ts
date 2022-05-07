import itemID from '../../../../util/itemID';
import { Production } from '../../../types';

const Leather: Production[] = [
	{
		name: 'Light Leather',
		id: itemID('Light Leather'),
		level: 1,
		xp: 28,
		hourPer: 0,
		minutePer: 1,
		secondPer: 24,
		input: {
			[itemID('Light Hide')]: 1
		},
		amount: 5
	},
	{
		name: 'Medium Leather',
		id: itemID('Medium Leather'),
		level: 10,
		xp: 52,
		hourPer: 0,
		minutePer: 2,
		secondPer: 6,
		input: {
			[itemID('Medium Hide')]: 1
		},
		amount: 5
	},
	{
		name: 'Sturdy Leather',
		id: itemID('Sturdy Leather'),
		level: 20,
		xp: 75,
		hourPer: 0,
		minutePer: 2,
		secondPer: 48,
		input: {
			[itemID('Sturdy Hide')]: 1
		},
		amount: 5
	},
	{
		name: 'Fine Leather',
		id: itemID('Fine Leather'),
		level: 40,
		xp: 96,
		hourPer: 0,
		minutePer: 3,
		secondPer: 18,
		input: {
			[itemID('Fine Hide')]: 1
		},
		amount: 5
	},
	{
		name: 'Exceptional Leather',
		id: itemID('Exceptional Leather'),
		level: 50,
		xp: 118,
		hourPer: 0,
		minutePer: 3,
		secondPer: 54,
		input: {
			[itemID('Exceptional Hide')]: 1
		},
		amount: 5
	},
	{
		name: 'Pristine Leather',
		id: itemID('Pristine Leather'),
		level: 60,
		xp: 140,
		hourPer: 0,
		minutePer: 4,
		secondPer: 31,
		input: {
			[itemID('Pristine Hide')]: 1
		},
		amount: 5
	}
];

export default Leather;
