import { Emoji } from '../../constants';
import itemID from '../../util/itemID';
import { Fish, SkillsEnum } from '../types';

const fishes: Fish[] = [
	{
		level: 1,
		xp: 5,
		id: itemID('Raw Shrimp'),
		name: 'Shrimp',
		cbRequired: 1
	},
	{
		level: 5,
		xp: 12,
		id: itemID('Raw Eel'),
		name: 'Eel',
		cbRequired: 1
	},
	{
		level: 10,
		xp: 20,
		id: itemID('Raw Cod'),
		name: 'Cod',
		cbRequired: 1
	},
	{
		level: 15,
		xp: 27,
		id: itemID('Raw Carp'),
		name: 'Carp',
		cbRequired: 1
	},
	{
		level: 20,
		xp: 35,
		id: itemID('Raw Trout'),
		name: 'Trout',
		cbRequired: 1
	},
	{
		level: 25,
		xp: 42,
		id: itemID('Raw Crappie'),
		name: 'Crappie',
		cbRequired: 1
	},
	{
		level: 30,
		xp: 50,
		id: itemID('Raw Perch Fish'),
		name: 'Perch Fish',
		alias: ['Perch'],
		cbRequired: 1
	},
	{
		level: 35,
		xp: 57,
		id: itemID('Raw Chub Fish'),
		name: 'Chub Fish',
		alias: ['Chub'],
		cbRequired: 1
	},
	{
		level: 40,
		xp: 65,
		id: itemID('Raw Tuna'),
		name: 'Tuna',
		cbRequired: 1
	},
	{
		level: 45,
		xp: 72,
		id: itemID('Raw Rock Fish'),
		name: 'Rock Fish',
		alias: ['Rock'],
		cbRequired: 1
	},
	{
		level: 50,
		xp: 80,
		id: itemID('Raw Pout Fish'),
		name: 'Pout Fish',
		alias: ['Pout'],
		cbRequired: 1
	},
	{
		level: 55,
		xp: 87,
		id: itemID('Raw Sun Fish'),
		name: 'Sun Fish',
		alias: ['Sun'],
		cbRequired: 1
	},
	{
		level: 60,
		xp: 95,
		id: itemID('Raw Snapper Fish'),
		name: 'Snapper Fish',
		alias: ['Snapper'],
		cbRequired: 1
	},
	{
		level: 65,
		xp: 102,
		id: itemID('Raw Bass'),
		name: 'Bass',
		cbRequired: 1
	},
	{
		level: 70,
		xp: 110,
		id: itemID('Raw Bluefin'),
		name: 'Bluefin',
		cbRequired: 1
	},
	{
		level: 80,
		xp: 125,
		id: itemID('Raw Grouper'),
		name: 'Grouper',
		cbRequired: 1
	},
	{
		level: 90,
		xp: 140,
		id: itemID('Raw Fangtooth'),
		name: 'Fangtooth',
		alias: ['Fang'],
		cbRequired: 1
	},
	{
		level: 100,
		xp: 155,
		id: itemID('Raw Magma Fish'),
		name: 'Magma Fish',
		alias: ['Magma'],
		cbRequired: 1
	}
];

const Fishing = {
	aliases: ['fishing'],
	Fishes: fishes,
	id: SkillsEnum.Fishing,
	emoji: Emoji.Fishing,
	name: 'Fishing'
};

export default Fishing;
