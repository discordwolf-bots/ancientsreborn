import { DefenceGearStat, GearStat, OffenceGearStat } from '../types';

const defenceMap: { [key in DefenceGearStat]: OffenceGearStat } = {
	[GearStat.MeleeBlock]: GearStat.MeleeAccuracy,
	[GearStat.MeleeDefence]: GearStat.MeleeAttack,
	[GearStat.RangedBlock]: GearStat.RangedAccuracy,
	[GearStat.RangedDefence]: GearStat.RangedAttack,
	[GearStat.MagicBlock]: GearStat.MagicAccuracy,
	[GearStat.MagicDefence]: GearStat.MagicAttack
};

const offenceMap: { [key in OffenceGearStat]: DefenceGearStat } = {
	[GearStat.MeleeAccuracy]: GearStat.MeleeBlock,
	[GearStat.MeleeAttack]: GearStat.MeleeDefence,
	[GearStat.RangedAccuracy]: GearStat.RangedBlock,
	[GearStat.RangedAttack]: GearStat.RangedDefence,
	[GearStat.MagicAccuracy]: GearStat.MagicBlock,
	[GearStat.MagicAttack]: GearStat.MagicDefence
};

export function inverseOfDefenceStat(stat: DefenceGearStat) {
	return defenceMap[stat];
}

export function inverseOfOffenceStat(stat: OffenceGearStat) {
	return offenceMap[stat];
}
