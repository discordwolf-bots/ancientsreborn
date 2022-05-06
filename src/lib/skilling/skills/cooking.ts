import { Emoji } from '../../constants';
import itemID from '../../util/itemID';
import { Cookable, SkillsEnum } from '../types';

export const Cookables: Cookable[] = [
	{
		level: 1,
		xp: 5,
		id: itemID('Cooked Shrimp'),
		name: 'Shrimp',
		timePer: 15,
		inputCookables: { [itemID('Raw Shrimp')]: 1 },
		stopBurnAt: 21,
		burntCookable: itemID('Burnt Shrimp')
	},
	{
		level: 5,
		xp: 12,
		id: itemID('Cooked Eel'),
		name: 'Eel',
		timePer: 30,
		inputCookables: { [itemID('Raw Eel')]: 1 },
		stopBurnAt: 25,
		burntCookable: itemID('Burnt Eel')
	},
	{
		level: 10,
		xp: 20,
		id: itemID('Cooked Cod'),
		name: 'Cod',
		timePer: 45,
		inputCookables: { [itemID('Raw Cod')]: 1 },
		stopBurnAt: 30,
		burntCookable: itemID('Burnt Cod')
	},
	{
		level: 15,
		xp: 27,
		id: itemID('Cooked Carp'),
		name: 'Carp',
		timePer: 60,
		inputCookables: { [itemID('Raw Carp')]: 1 },
		stopBurnAt: 35,
		burntCookable: itemID('Burnt Carp')
	},
	{
		level: 20,
		xp: 35,
		id: itemID('Cooked Trout'),
		name: 'Trout',
		timePer: 75,
		inputCookables: { [itemID('Raw Trout')]: 1 },
		stopBurnAt: 40,
		burntCookable: itemID('Burnt Trout')
	},
	{
		level: 25,
		xp: 42,
		id: itemID('Cooked Crappie'),
		name: 'Crappie',
		timePer: 90,
		inputCookables: { [itemID('Raw Crappie')]: 1 },
		stopBurnAt: 45,
		burntCookable: itemID('Burnt Crappie')
	},
	{
		level: 30,
		xp: 50,
		id: itemID('Cooked Perch Fish'),
		name: 'Perch Fish',
		alias: ['Perch'],
		timePer: 105,
		inputCookables: { [itemID('Raw Perch Fish')]: 1 },
		stopBurnAt: 50,
		burntCookable: itemID('Burnt Perch Fish')
	},
	{
		level: 35,
		xp: 57,
		id: itemID('Cooked Chub Fish'),
		name: 'Chub Fish',
		alias: ['Chub'],
		timePer: 120,
		inputCookables: { [itemID('Raw Chub Fish')]: 1 },
		stopBurnAt: 55,
		burntCookable: itemID('Burnt Chub Fish')
	},
	{
		level: 40,
		xp: 65,
		id: itemID('Cooked Tuna'),
		name: 'Tuna',
		timePer: 135,
		inputCookables: { [itemID('Raw Tuna')]: 1 },
		stopBurnAt: 60,
		burntCookable: itemID('Burnt Tuna')
	},
	{
		level: 45,
		xp: 72,
		id: itemID('Cooked Rock Fish'),
		name: 'Rock Fish',
		alias: ['Rock'],
		timePer: 150,
		inputCookables: { [itemID('Raw Rock Fish')]: 1 },
		stopBurnAt: 65,
		burntCookable: itemID('Burnt Rock Fish')
	},
	{
		level: 50,
		xp: 80,
		id: itemID('Cooked Pout Fish'),
		name: 'Pout Fish',
		alias: ['Pout'],
		timePer: 165,
		inputCookables: { [itemID('Raw Pout Fish')]: 1 },
		stopBurnAt: 70,
		burntCookable: itemID('Burnt Pout Fish')
	},
	{
		level: 55,
		xp: 87,
		id: itemID('Cooked Sun Fish'),
		name: 'Sun Fish',
		alias: ['Sun'],
		timePer: 180,
		inputCookables: { [itemID('Raw Sun Fish')]: 1 },
		stopBurnAt: 75,
		burntCookable: itemID('Burnt Sun Fish')
	},
	{
		level: 60,
		xp: 95,
		id: itemID('Cooked Snapper Fish'),
		name: 'Snapper Fish',
		alias: ['Snapper'],
		timePer: 195,
		inputCookables: { [itemID('Raw Snapper Fish')]: 1 },
		stopBurnAt: 80,
		burntCookable: itemID('Burnt Snapper Fish')
	},
	{
		level: 65,
		xp: 102,
		id: itemID('Cooked Bass'),
		name: 'Bass',
		timePer: 210,
		inputCookables: { [itemID('Raw Bass')]: 1 },
		stopBurnAt: 85,
		burntCookable: itemID('Burnt Bass')
	},
	{
		level: 70,
		xp: 110,
		id: itemID('Cooked Bluefin'),
		name: 'Bluefin',
		timePer: 225,
		inputCookables: { [itemID('Raw Bluefin')]: 1 },
		stopBurnAt: 90,
		burntCookable: itemID('Burnt Bluefin')
	},
	{
		level: 80,
		xp: 125,
		id: itemID('Cooked Grouper'),
		name: 'Grouper',
		timePer: 255,
		inputCookables: { [itemID('Raw Grouper')]: 1 },
		stopBurnAt: 100,
		burntCookable: itemID('Burnt Grouper')
	},
	{
		level: 90,
		xp: 140,
		id: itemID('Cooked Fangtooth'),
		name: 'Fangtooth',
		alias: ['Fang'],
		timePer: 285,
		inputCookables: { [itemID('Raw Fangtooth')]: 1 },
		stopBurnAt: 110,
		burntCookable: itemID('Burnt Fangtooth')
	},
	{
		level: 100,
		xp: 155,
		id: itemID('Cooked Magma Fish'),
		name: 'Magma Fish',
		alias: ['Magma'],
		timePer: 315,
		inputCookables: { [itemID('Raw Magma Fish')]: 1 },
		stopBurnAt: 120,
		burntCookable: itemID('Burnt Magma Fish')
	}
];

const Cooking = {
	aliases: ['cooking', 'cook'],
	Cookables,
	id: SkillsEnum.Cooking,
	emoji: Emoji.Cooking,
	name: 'Cooking'
};

export default Cooking;
