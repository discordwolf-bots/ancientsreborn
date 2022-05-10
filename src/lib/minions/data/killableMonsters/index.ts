import { Time } from 'e';
import { Monsters } from 'oldschooljs';

import itemID from '../../../util/itemID';
import resolveItems from '../../../util/resolveItems';
import { KillableMonster } from '../../types';
import bosses from './bosses';

const killableMonsters: KillableMonster[] = [
	...bosses,
	{
		id: Monsters.Barrows.id,
		name: Monsters.Barrows.name,
		aliases: Monsters.Barrows.aliases,
		timeToFinish: Time.Minute * 4.15,
		table: Monsters.Barrows,
		emoji: '<:Dharoks_helm:403038864199122947>',
		wildy: false,

		difficultyRating: 4,
		itemsRequired: resolveItems([]),
		notifyDrops: resolveItems([]),
		qpRequired: 0,
		itemInBankBoosts: [
			{ [itemID('Barrows gloves')]: 2 },
			{ [itemID("Iban's staff")]: 5 },
			{ [itemID('Strange old lockpick')]: 7 }
		],
		levelRequirements: {
			strength: 43
		},
		customMonsterHP: 600,
		combatXpMultiplier: 1.09
	}
];

export default killableMonsters;

export const effectiveMonsters = [...killableMonsters];
