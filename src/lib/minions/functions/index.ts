import { KlasaUser } from 'klasa';
import { Monsters } from 'oldschooljs';
import Monster from 'oldschooljs/dist/structures/Monster';

import { NIGHTMARES_HP } from '../../constants';
import { SkillsEnum } from '../../skilling/types';
import killableMonsters from '../data/killableMonsters';
import { AddMonsterXpParams, KillableMonster, ResolveAttackStylesParams } from '../types';

export { default as calculateMonsterFood } from './calculateMonsterFood';
export { default as reducedTimeForGroup } from './reducedTimeForGroup';

export const attackStylesArr = [
	SkillsEnum.Strength,
	SkillsEnum.Dexterity,
	SkillsEnum.Defence,
	SkillsEnum.Intellect
] as const;
export type AttackStyles = typeof attackStylesArr[number];

const miscHpMap: Record<number, number> = {
	9415: NIGHTMARES_HP,
	3127: 250
};

export function resolveAttackStyles(
	user: KlasaUser,
	params: ResolveAttackStylesParams
): [KillableMonster | undefined, Monster | undefined, AttackStyles[]] {
	const killableMon = killableMonsters.find(m => m.id === params.monsterID);
	const osjsMon = Monsters.get(params.monsterID);

	// The styles chosen by this user to use.
	let attackStyles = user.getAttackStyles();

	// The default attack styles to use for this monster, defaults to shared (melee)
	const monsterStyles =
		killableMon?.defaultAttackStyles ??
		attackStylesArr.filter(i => !killableMon?.disallowedAttackStyles?.includes(i)).slice(0, 1);

	// If their attack style can't be used on this monster, or they have no selected attack styles selected,
	// use the monsters default attack style.
	if (attackStyles.length === 0 || attackStyles.some(s => killableMon?.disallowedAttackStyles?.includes(s))) {
		attackStyles = monsterStyles;
	}

	return [killableMon, osjsMon, attackStyles];
}

export async function addMonsterXP(user: KlasaUser, params: AddMonsterXpParams) {
	const [, osjsMon, attackStyles] = resolveAttackStyles(user, {
		monsterID: params.monsterID
	});
	const monster = killableMonsters.find(mon => mon.id === params.monsterID);
	let hp = miscHpMap[params.monsterID] ?? 1;
	let xpMultiplier = 1;

	// Remove superiors from the regular count to be added separately.
	let normalQty = params.quantity;

	// Calculate regular monster XP
	if (monster && monster.customMonsterHP) {
		hp = monster.customMonsterHP;
	} else if (osjsMon?.data?.hitpoints) {
		hp = osjsMon.data.hitpoints;
	}
	if (monster && monster.combatXpMultiplier) {
		xpMultiplier = monster.combatXpMultiplier;
	}

	const totalXP = hp * 4 * normalQty * xpMultiplier;
	const xpPerSkill = totalXP / attackStyles.length;

	let res: string[] = [];

	for (const style of attackStyles) {
		res.push(
			await user.addXP({
				skillName: style,
				amount: Math.floor(xpPerSkill),
				duration: params.duration,
				minimal: params.minimal ?? true
			})
		);
	}

	res.push(
		await user.addXP({
			skillName: SkillsEnum.Vitality,
			amount: Math.floor(hp * normalQty * 1.33 * xpMultiplier),
			duration: params.duration,
			minimal: params.minimal ?? true
		})
	);

	return `**XP Gains:** ${res.join(' ')}`;
}
