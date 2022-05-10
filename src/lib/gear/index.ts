import { GearPreset } from '@prisma/client';
import { EquipmentSlot } from 'oldschooljs/dist/meta/types';

import itemID from '../util/itemID';
import { DefenceGearStat, GearSetup, GearStat, OffenceGearStat, OtherGearStat } from './types';

export * from './types';
export * from './util';

// https://oldschool.runescape.wiki/w/Armour/Highest_bonuses
export const maxDefenceStats: { [key in DefenceGearStat]: number } = {
	[GearStat.MeleeBlock]: 1000,
	[GearStat.MeleeDefence]: 1000,
	[GearStat.RangedBlock]: 1000,
	[GearStat.RangedDefence]: 1000,
	[GearStat.MagicBlock]: 1000,
	[GearStat.MagicDefence]: 1000
};

export const maxOffenceStats: { [key in OffenceGearStat]: number } = {
	[GearStat.MeleeAccuracy]: 1000,
	[GearStat.MeleeAttack]: 1000,
	[GearStat.RangedAccuracy]: 1000,
	[GearStat.RangedAttack]: 1000,
	[GearStat.MagicAccuracy]: 1000,
	[GearStat.MagicAttack]: 1000
};

export const maxOtherStats: { [key in OtherGearStat]: number } = {
	[GearStat.ResistanceArcane]: 1000,
	[GearStat.ResistanceCold]: 1000,
	[GearStat.ResistanceHeat]: 1000,
	[GearStat.ResistancePhysical]: 1000,
	[GearStat.ResistancePoison]: 1000,
	[GearStat.Health]: 1000
};

export const defaultGear: GearSetup = {
	[EquipmentSlot.TwoHanded]: null,
	[EquipmentSlot.Ammo]: null,
	[EquipmentSlot.Chest]: null,
	[EquipmentSlot.Cape]: null,
	[EquipmentSlot.Boots]: null,
	[EquipmentSlot.Gloves]: null,
	[EquipmentSlot.Helm]: null,
	[EquipmentSlot.Legs]: null,
	[EquipmentSlot.Neck]: null,
	[EquipmentSlot.Ring]: null,
	[EquipmentSlot.Shield]: null,
	[EquipmentSlot.Weapon]: null,
	[EquipmentSlot.Belt]: null,
	[EquipmentSlot.Gems]: null
};
Object.freeze(defaultGear);

export const globalPresets: GearPreset[] = [
	{
		name: 'lumberjack',
		user_id: '123',
		helm: itemID('Lumberjack hat'),
		neck: null,
		chest: itemID('Lumberjack top'),
		legs: itemID('Lumberjack legs'),
		cape: null,
		two_handed: null,
		gloves: null,
		boots: itemID('Lumberjack boots'),
		shield: null,
		weapon: null,
		ring: null,
		ammo: null,
		ammo_qty: null,
		belt: null,
		gems: null
	}
];
