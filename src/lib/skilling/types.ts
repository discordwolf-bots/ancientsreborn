import { Bank } from 'oldschooljs';
import LootTable from 'oldschooljs/dist/structures/LootTable';

import { Emoji } from '../constants';
import { ItemBank } from '../types';

export enum SkillsEnum {
	Mining = 'mining',
	Fishing = 'fishing',
	Woodcutting = 'woodcutting',
	Gathering = 'gathering',
	Metallurgy = 'metallurgy',
	Blacksmithing = 'blacksmithing',
	Cooking = 'cooking',
	Carpentry = 'carpentry',
	Weaving = 'weaving',
	Fletching = 'fletching',
	Tailoring = 'tailoring',

	Piercing = 'piercing',
	Fencing = 'fencing',
	HeavyWeapons = 'heavyWeapons',
	MagicStaffs = 'magicStaffs',
	RangedWeapons = 'rangedWeapons',

	Strength = 'strength',
	Dexterity = 'dexterity',
	Defence = 'defence',
	Intellect = 'intellect',
	Vitality = 'vitality'
}

export interface Ore {
	level: number;
	xp: number;
	id: number;
	name: string;
	cbRequired?: number;
}

export interface Log {
	level: number;
	xp: number;
	id: number;
	name: string;
	alias?: string[];
	cbRequired?: number;
}

export interface Herb {
	level: number;
	xp: number;
	id: number;
	name: string;
	alias?: string[];
	cbRequired?: number;
}

export interface Fish {
	level: number;
	xp: number;
	id: number;
	name: string;
	cbRequired?: number;
	alias?: string[];
}

export interface Cookable {
	level: number;
	xp: number;
	id: number;
	name: string;
	inputCookables: ItemBank;
	stopBurnAt: number;
	stopBurnAtCG?: number;
	timePer: number;
	burntCookable: number;
	alias?: string[];
}

export interface Production {
	level: number;
	xp: number;
	id: number;
	name: string;
	input: ItemBank | Bank;
	timePer?: number;
	hourPer?: number;
	minutePer?: number;
	secondPer?: number;
	amount?: number;
	alias?: string[];
}

export type LevelRequirements = Partial<{
	[key in SkillsEnum]: number;
}>;

export interface Skill {
	aliases: string[];
	id: SkillsEnum;
	emoji: Emoji;
	name: string;
}

export interface Creature {
	name: string;
	id: number;
	aliases: string[];
	level: number;
	fishLvl?: number;
	fishingXP?: number;
	itemsRequired?: Bank;
	itemsConsumed?: Bank;
	table: LootTable;
	catchTime: number;
	slope: number;
	intercept: number;
}
