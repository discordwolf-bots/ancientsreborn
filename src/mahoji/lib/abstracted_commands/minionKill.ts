import {
	calcPercentOfNum,
	calcWhatPercent,
	increaseNumByPercent,
	objectKeys,
	reduceNumByPercent,
	round,
	Time,
	uniqueArr
} from 'e';
import { KlasaUser } from 'klasa';
import { Bank, Monsters } from 'oldschooljs';
import Monster from 'oldschooljs/dist/structures/Monster';
import { addArrayOfNumbers, itemID } from 'oldschooljs/dist/util';

import { client } from '../../..';
import { Eatables } from '../../../lib/data/eatables';
import { getSimilarItems } from '../../../lib/data/similarItems';
import { checkUserCanUseDegradeableItem, degradeItem } from '../../../lib/degradeableItems';
import { GearSetupType } from '../../../lib/gear';
import { AttackStyles, calculateMonsterFood, resolveAttackStyles } from '../../../lib/minions/functions';
import reducedTimeFromKC from '../../../lib/minions/functions/reducedTimeFromKC';
import removeFoodFromUser from '../../../lib/minions/functions/removeFoodFromUser';
import { Consumable, KillableMonster } from '../../../lib/minions/types';
import { trackLoot } from '../../../lib/settings/prisma';
import { ClientSettings } from '../../../lib/settings/types/ClientSettings';
import { MonsterActivityTaskOptions } from '../../../lib/types/minions';
import {
	convertAttackStyleToGearSetup,
	formatDuration,
	formatMissingItems,
	isWeekend,
	itemNameFromID,
	randomVariation,
	updateBankSetting
} from '../../../lib/util';
import addSubTaskToActivityTask from '../../../lib/util/addSubTaskToActivityTask';
import findMonster from '../../../lib/util/findMonster';
import getOSItem from '../../../lib/util/getOSItem';

const invalidMonsterMsg = "That isn't a valid monster.\n\nFor example, `/k name:zulrah quantity:5`";

const { floor } = Math;

const degradeableItemsCanUse = [
	{
		item: getOSItem('Sanguinesti staff'),
		attackStyle: 'mage',
		charges: (_killableMon: KillableMonster, _monster: Monster, totalHP: number) => totalHP / 25,
		boost: 6
	},
	{
		item: getOSItem('Abyssal tentacle'),
		attackStyle: 'melee',
		charges: (_killableMon: KillableMonster, _monster: Monster, totalHP: number) => totalHP / 20,
		boost: 3
	}
];

function applySkillBoost(user: KlasaUser, duration: number, styles: AttackStyles[]): [number, string] {
	const skillTotal = addArrayOfNumbers(styles.map(s => user.skillLevel(s)));

	let newDuration = duration;
	let str = '';
	let percent = round(calcWhatPercent(skillTotal, styles.length * 99), 2);

	if (percent < 50) {
		percent = 50 - percent;
		newDuration = increaseNumByPercent(newDuration, percent);
		str = `-${percent.toFixed(2)}% for low stats`;
	} else {
		percent = Math.min(15, percent / 6.5);
		newDuration = reduceNumByPercent(newDuration, percent);
		str = `${percent.toFixed(2)}% for stats`;
	}

	return [newDuration, str];
}

export async function minionKillCommand(
	user: KlasaUser,
	channelID: bigint,
	name: string,
	quantity: number | undefined
) {
	const { minionName } = user;

	const boosts = [];
	let messages: string[] = [];

	if (!name) return invalidMonsterMsg;

	const monster = findMonster(name);
	if (!monster) return invalidMonsterMsg;

	// Check requirements
	const [hasReqs, reason] = user.hasMonsterRequirements(monster);
	if (!hasReqs) return reason ?? "You don't have the requirements to fight this monster";

	let [timeToFinish, percentReduced] = reducedTimeFromKC(monster, user.getKC(monster.id));

	const [, osjsMon, attackStyles] = resolveAttackStyles(user, {
		monsterID: monster.id
	});
	const [newTime, skillBoostMsg] = applySkillBoost(user, timeToFinish, attackStyles);

	timeToFinish = newTime;
	boosts.push(skillBoostMsg);

	if (percentReduced >= 1) boosts.push(`${percentReduced}% for KC`);

	for (const [itemID, boostAmount] of Object.entries(user.resolveAvailableItemBoosts(monster))) {
		timeToFinish *= (100 - boostAmount) / 100;
		boosts.push(`${boostAmount}% for ${itemNameFromID(parseInt(itemID))}`);
	}

	const monsterHP = osjsMon?.data.hitpoints ?? 100;
	const estimatedQuantity = floor(user.maxTripLength('MonsterKilling') / timeToFinish);
	const totalMonsterHP = monsterHP * estimatedQuantity;

	/**
	 *
	 * Degradeable Items
	 *
	 */
	const degItemBeingUsed = [];
	for (const degItem of degradeableItemsCanUse) {
		const isUsing =
			monster.attackStyleToUse &&
			convertAttackStyleToGearSetup(monster.attackStyleToUse) === degItem.attackStyle &&
			user.getGear(degItem.attackStyle).hasEquipped(degItem.item.id);
		if (isUsing) {
			const estimatedChargesNeeded = degItem.charges(monster, osjsMon!, totalMonsterHP);
			await checkUserCanUseDegradeableItem({
				item: degItem.item,
				chargesToDegrade: estimatedChargesNeeded,
				user
			});
			degItemBeingUsed.push(degItem);
		}
	}

	// // Removed vorkath because he has a special boost.
	// if (monster.name.toLowerCase() !== 'vorkath' && osjsMon?.data?.attributes?.includes(MonsterAttribute.Dragon)) {
	// 	if (
	// 		user.hasItemEquippedOrInBank('Dragon hunter lance') &&
	// 		!attackStyles.includes(SkillsEnum.Ranged) &&
	// 		!attackStyles.includes(SkillsEnum.Magic)
	// 	) {
	// 		timeToFinish = reduceNumByPercent(timeToFinish, 15);
	// 		boosts.push('15% for Dragon hunter lance');
	// 	} else if (user.hasItemEquippedOrInBank('Dragon hunter crossbow') && attackStyles.includes(SkillsEnum.Ranged)) {
	// 		timeToFinish = reduceNumByPercent(timeToFinish, 15);
	// 		boosts.push('15% for Dragon hunter crossbow');
	// 	}
	// }

	// // Black mask and salve don't stack.
	// const salveBoost = boosts.join('').toLowerCase().includes('salve amulet');
	// if (!salveBoost) {
	// 	// Add 15% slayer boost on task if they have black mask or similar
	// 	if (attackStyles.includes(SkillsEnum.Ranged) || attackStyles.includes(SkillsEnum.Magic)) {
	// 		if (isOnTask && user.hasItemEquippedOrInBank('Black mask (i)')) {
	// 			timeToFinish = reduceNumByPercent(timeToFinish, 15);
	// 			boosts.push('15% for Black mask (i) on non-melee task');
	// 		}
	// 	} else if (
	// 		isOnTask &&
	// 		(user.hasItemEquippedOrInBank('Black mask') || user.hasItemEquippedOrInBank('Black mask (i)'))
	// 	) {
	// 		timeToFinish = reduceNumByPercent(timeToFinish, 15);
	// 		boosts.push('15% for Black mask on melee task');
	// 	}
	// }

	// Initialize consumable costs before any are calculated.
	const consumableCosts: Consumable[] = [];

	const maxTripLength = user.maxTripLength('MonsterKilling');

	// If no quantity provided, set it to the max.
	if (!quantity) {
		if ([Monsters.Skotizo.id].includes(monster.id)) {
			quantity = 1;
		} else {
			quantity = floor(maxTripLength / timeToFinish);
		}
	}

	quantity = Math.max(1, quantity);
	let duration = timeToFinish * quantity;
	if (quantity > 1 && duration > maxTripLength) {
		return `${minionName} can't go on PvM trips longer than ${formatDuration(
			maxTripLength
		)}, try a lower quantity. The highest amount you can do for ${monster.name} is ${floor(
			maxTripLength / timeToFinish
		)}.`;
	}

	const totalCost = new Bank();
	const lootToRemove = new Bank();
	let pvmCost = false;

	if (monster.itemCost) {
		consumableCosts.push(monster.itemCost);
	}

	const infiniteWaterRunes = user.hasItemEquippedAnywhere(getSimilarItems(itemID('Staff of water')));
	const perKillCost = new Bank();
	// Calculate per kill cost:
	if (consumableCosts.length > 0) {
		for (const cc of consumableCosts) {
			let consumable = cc;
			if (consumable.alternativeConsumables && !user.owns(consumable.itemCost)) {
				for (const c of consumable.alternativeConsumables) {
					if (user.owns(c.itemCost)) {
						consumable = c;
						break;
					}
				}
			}

			let itemMultiple = consumable.qtyPerKill ?? consumable.qtyPerMinute ?? null;
			if (itemMultiple) {
				if (consumable.isRuneCost) {
					// Free casts for kodai + sotd
					if (user.hasItemEquippedAnywhere('Kodai wand')) {
						itemMultiple = Math.ceil(0.85 * itemMultiple);
					} else if (user.hasItemEquippedAnywhere('Staff of the dead')) {
						itemMultiple = Math.ceil((6 / 7) * itemMultiple);
					}
				}

				let multiply = itemMultiple;

				// Calculate the duration for 1 kill and check how much will be used in 1 kill
				if (consumable.qtyPerMinute) multiply = (timeToFinish / Time.Minute) * itemMultiple;

				// Calculate supply for 1 kill
				const oneKcCost = consumable.itemCost.clone().multiply(multiply);
				// Can't use Bank.add() because it discards < 1 qty.
				for (const [itemID, qty] of Object.entries(oneKcCost.bank)) {
					if (perKillCost.bank[itemID]) perKillCost.bank[itemID] += qty;
					else perKillCost.bank[itemID] = qty;
				}
			}
		}
		// This will be replaced with a generic function in another PR
		if (infiniteWaterRunes) perKillCost.remove('Water rune', perKillCost.amount('Water rune'));
		// Calculate how many monsters can be killed with that cost:
		const fits = user.bank({ withGP: true }).fits(perKillCost);
		if (fits < Number(quantity)) {
			duration = Math.floor(duration * (fits / Number(quantity)));
			quantity = fits;
		}
		const { bank } = perKillCost.clone().multiply(Number(quantity));
		// Ceil cost QTY to avoid fractions
		for (const [item, qty] of Object.entries(bank)) {
			bank[item] = Math.ceil(qty);
		}

		pvmCost = true;
		lootToRemove.add(bank);
	}
	if (pvmCost) {
		if (quantity === 0 || !user.owns(lootToRemove)) {
			return `You don't have the items needed to kill any amount of ${
				monster.name
			}, you need: ${formatMissingItems(consumableCosts, timeToFinish)} per kill.`;
		}
	}
	// Check food
	let foodStr: string = '';
	if (monster.healAmountNeeded && monster.attackStyleToUse && monster.attackStylesUsed) {
		const [healAmountNeeded, foodMessages] = calculateMonsterFood(monster, user);
		foodStr += foodMessages;

		let gearToCheck: GearSetupType = convertAttackStyleToGearSetup(monster.attackStyleToUse);

		try {
			const { foodRemoved, reductions } = await removeFoodFromUser({
				client,
				user,
				totalHealingNeeded: healAmountNeeded * quantity,
				healPerAction: Math.ceil(healAmountNeeded / quantity),
				activityName: monster.name,
				attackStylesUsed: uniqueArr([...objectKeys(monster.minimumGearRequirements ?? {}), gearToCheck]),
				learningPercentage: percentReduced
			});

			if (foodRemoved.length === 0) {
				boosts.push('4% for no food');
				duration = reduceNumByPercent(duration, 4);
			} else {
				for (const [item, qty] of foodRemoved.items()) {
					const eatable = Eatables.find(e => e.id === item.id);
					if (!eatable) continue;

					const healAmount =
						typeof eatable.healAmount === 'number' ? eatable.healAmount : eatable.healAmount(user);
					const amountHealed = qty * healAmount;
					if (amountHealed < calcPercentOfNum(75, healAmountNeeded * quantity)) continue;
					const boost = eatable.pvmBoost;
					if (boost) {
						if (boost < 0) {
							boosts.push(`${boost}% for ${eatable.name}`);
							duration = increaseNumByPercent(duration, Math.abs(boost));
						} else {
							boosts.push(`${boost}% for ${eatable.name}`);
							duration = reduceNumByPercent(duration, boost);
						}
					}
					break;
				}
			}

			totalCost.add(foodRemoved);
			if (reductions.length > 0) {
				foodStr += `, ${reductions.join(', ')}`;
			}
			foodStr += `, **Removed ${foodRemoved}**`;
		} catch (e: any) {
			if (typeof e === 'string') {
				return e;
			}
			if (e.message) {
				return e.message;
			}
		}
	}

	// Boosts that don't affect quantity:
	duration = randomVariation(duration, 3);

	for (const degItem of degItemBeingUsed) {
		const chargesNeeded = degItem.charges(monster, osjsMon!, monsterHP * quantity);
		await degradeItem({
			item: degItem.item,
			chargesToDegrade: chargesNeeded,
			user
		});
		boosts.push(`${degItem.boost}% for ${degItem.item.name}`);
		duration = reduceNumByPercent(duration, degItem.boost);
	}

	if (isWeekend()) {
		boosts.push('10% for Weekend');
		duration *= 0.9;
	}

	if (lootToRemove.length > 0) {
		updateBankSetting(client, ClientSettings.EconomyStats.PVMCost, lootToRemove);
		await user.removeItemsFromBank(lootToRemove);
		totalCost.add(lootToRemove);
	}

	if (totalCost.length > 0) {
		await trackLoot({
			id: monster.name,
			cost: totalCost,
			type: 'Monster',
			changeType: 'cost'
		});
	}

	await addSubTaskToActivityTask<MonsterActivityTaskOptions>({
		monsterID: monster.id,
		userID: user.id,
		channelID: channelID.toString(),
		quantity,
		duration,
		type: 'MonsterKilling'
	});
	let response = `${minionName} is now killing ${quantity}x ${monster.name}, it'll take around ${formatDuration(
		duration
	)} to finish. Attack styles used: ${attackStyles.join(', ')}.`;

	if (pvmCost) {
		response += ` Removed ${lootToRemove}.`;
	}

	if (boosts.length > 0) {
		response += `\n**Boosts:** ${boosts.join(', ')}.`;
	}

	if (messages.length > 0) {
		response += `\n**Messages:** ${messages.join(', ')}.`;
	}

	if (foodStr) {
		response += `\n**Food:** ${foodStr}\n`;
	}

	return response;
}
