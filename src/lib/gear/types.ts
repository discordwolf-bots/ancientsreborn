import { EquipmentSlot } from 'oldschooljs/dist/meta/types';

import { Gear } from '../structures/Gear';

export type UserFullGearSetup = {
	[key in GearSetupType]: Gear;
};

export const GearSetupTypes = ['melee', 'ranged', 'magic', 'skilling'] as const;

export type GearSetupType = typeof GearSetupTypes[number];

export enum GearStat {
	Health = 'health',
	MeleeAttack = 'meleeAttack',
	MeleeAccuracy = 'meleeAccuracy',
	MeleeDefence = 'meleeDefence',
	MeleeBlock = 'meleeBlock',
	RangedAttack = 'rangedAttack',
	RangedAccuracy = 'rangedAccuracy',
	RangedDefence = 'rangedDefence',
	RangedBlock = 'rangedBlock',
	MagicAttack = 'magicAttack',
	MagicAccuracy = 'magicAccuracy',
	MagicDefence = 'magicDefence',
	MagicBlock = 'magicBlock',
	ResistanceHeat = 'resistanceHeat',
	ResistanceCold = 'resistanceCold',
	ResistancePhysical = 'resistancePhysical',
	ResistancePoison = 'resistancePoison',
	ResistanceArcane = 'resistanceArcane'
}

export interface GearSlotItem {
	item: number;
	quantity: number;
}

export type GearSetup = {
	[key in EquipmentSlot]: GearSlotItem | null;
};

export interface GearStats {
	health: number;
	meleeAttack: number;
	meleeAccuracy: number;
	meleeDefence: number;
	meleeBlock: number;
	rangedAttack: number;
	rangedAccuracy: number;
	rangedDefence: number;
	rangedBlock: number;
	magicAttack: number;
	magicAccuracy: number;
	magicDefence: number;
	magicBlock: number;
	resistanceHeat: number;
	resistanceCold: number;
	resistancePhysical: number;
	resistancePoison: number;
	resistanceArcane: number;
}

export type OffenceGearStat =
	| GearStat.MeleeAttack
	| GearStat.RangedAttack
	| GearStat.MagicAttack
	| GearStat.MeleeAccuracy
	| GearStat.RangedAccuracy
	| GearStat.MagicAccuracy;

export type DefenceGearStat =
	| GearStat.MeleeDefence
	| GearStat.RangedDefence
	| GearStat.MagicDefence
	| GearStat.MeleeBlock
	| GearStat.RangedBlock
	| GearStat.MagicBlock;

export type OtherGearStat =
	| GearStat.Health
	| GearStat.ResistanceHeat
	| GearStat.ResistanceCold
	| GearStat.ResistancePhysical
	| GearStat.ResistancePoison
	| GearStat.ResistanceArcane;

export type GearRequired = Partial<{
	[key in EquipmentSlot]: number[];
}>;
