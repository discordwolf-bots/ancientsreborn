import { notEmpty, objectKeys } from 'e';
import { EquipmentSlot, Item } from 'oldschooljs/dist/meta/types';

import { getSimilarItems, inverseSimilarItems } from '../data/similarItems';
import { constructGearSetup, GearSetup, GearSlotItem, GearStats, PartialGearSetup } from '../gear';
import { GearRequirement } from '../minions/types';
import getOSItem from '../util/getOSItem';
import resolveItems from '../util/resolveItems';

const baseStats: GearStats = {
	meleeAttack: 0,
	meleeAccuracy: 0,
	meleeBlock: 0,
	meleeDefence: 0,
	rangedAttack: 0,
	rangedAccuracy: 0,
	rangedBlock: 0,
	rangedDefence: 0,
	magicAccuracy: 0,
	magicAttack: 0,
	magicBlock: 0,
	magicDefence: 0,
	health: 0,
	resistanceArcane: 0,
	resistanceCold: 0,
	resistanceHeat: 0,
	resistancePhysical: 0,
	resistancePoison: 0
};

export class Gear {
	[EquipmentSlot.TwoHanded]: GearSlotItem | null = null;
	[EquipmentSlot.Ammo]: GearSlotItem | null = null;
	[EquipmentSlot.Chest]: GearSlotItem | null = null;
	[EquipmentSlot.Cape]: GearSlotItem | null = null;
	[EquipmentSlot.Boots]: GearSlotItem | null = null;
	[EquipmentSlot.Gloves]: GearSlotItem | null = null;
	[EquipmentSlot.Helm]: GearSlotItem | null = null;
	[EquipmentSlot.Legs]: GearSlotItem | null = null;
	[EquipmentSlot.Neck]: GearSlotItem | null = null;
	[EquipmentSlot.Ring]: GearSlotItem | null = null;
	[EquipmentSlot.Shield]: GearSlotItem | null = null;
	[EquipmentSlot.Weapon]: GearSlotItem | null = null;
	[EquipmentSlot.Belt]: GearSlotItem | null = null;
	[EquipmentSlot.Gems]: GearSlotItem | null = null;
	stats = baseStats;

	constructor(_setup: GearSetup | PartialGearSetup = {}) {
		const setup =
			typeof _setup?.ammo === 'undefined' || typeof _setup?.ammo === 'string'
				? constructGearSetup(_setup as PartialGearSetup)
				: (_setup as GearSetup);

		this['2h'] = setup['2h'];
		this.ammo = setup.ammo;
		this.chest = setup.chest;
		this.cape = setup.cape;
		this.boots = setup.boots;
		this.gloves = setup.gloves;
		this.helm = setup.helm;
		this.legs = setup.legs;
		this.neck = setup.neck;
		this.ring = setup.ring;
		this.shield = setup.shield;
		this.weapon = setup.weapon;
		this.belt = setup.belt;
		this.gems = setup.gems;

		this.stats = this.getStats();
	}

	raw(): GearSetup {
		return {
			ammo: this.ammo,
			chest: this.chest,
			cape: this.cape,
			boots: this.boots,
			gloves: this.gloves,
			helm: this.helm,
			legs: this.legs,
			neck: this.neck,
			ring: this.ring,
			shield: this.shield,
			weapon: this.weapon,
			belt: this.belt,
			gems: this.gems,
			'2h': this['2h']
		};
	}

	allItems(similar = false): number[] {
		const gear = this.raw();
		const values = Object.values(gear)
			.filter(notEmpty)
			.map(i => i.item);

		if (similar) {
			for (const item of [...values]) {
				const inverse = inverseSimilarItems.get(item);
				if (inverse) {
					values.push(...inverse.values());
				}
				const similarItems = getSimilarItems(item);
				if (similarItems) {
					values.push(...similarItems);
				}
			}
		}

		return values;
	}

	hasEquipped(_items: number | string | (string | number)[], every = false, includeSimilar = true) {
		const items = resolveItems(_items);
		const allItems = this.allItems();
		if (!includeSimilar) {
			return items[every ? 'every' : 'some'](i => allItems.includes(i));
		} else if (every) {
			// similar = true, every = true
			const targetCount = items.length;
			let currentCount = 0;
			for (const i of [...items]) {
				const similarItems = getSimilarItems(i);
				if (similarItems.length) {
					if (similarItems.some(si => allItems.includes(si))) currentCount++;
				} else if (allItems.includes(i)) currentCount++;
			}
			return currentCount === targetCount;
		}
		// similar = true, every = false
		for (const i of [...items]) {
			const similarItems = getSimilarItems(i);
			similarItems.push(i);
			if (similarItems.some(si => allItems.includes(si))) return true;
		}
		return false;
	}

	equippedWeapon(): Item | null {
		const normalWeapon = this.weapon;
		const twoHandedWeapon = this['2h'];
		if (!normalWeapon && !twoHandedWeapon) return null;
		return getOSItem(normalWeapon === null ? twoHandedWeapon!.item : normalWeapon.item);
	}

	getStats() {
		const sum = { ...baseStats };
		for (const id of this.allItems(false)) {
			const item = getOSItem(id);
			for (const keyToAdd of objectKeys(sum)) {
				sum[keyToAdd] += item.equipment![keyToAdd];
			}
		}
		return sum;
	}

	meetsStatRequirements(gearRequirements: GearRequirement): [false, keyof GearStats, number] | [true, null, null] {
		const keys = objectKeys(this.stats as Record<keyof GearStats, number>);
		for (const key of keys) {
			const required = gearRequirements?.[key];
			if (!required) continue;
			const has = this.stats[key];
			if (required < 0) continue;
			if (has < required) {
				return [false, key, has];
			}
		}
		return [true, null, null];
	}

	toString() {
		const allItems = this.allItems(false);
		if (allItems.length === 0) {
			return 'No items';
		}
		let items = [];
		for (const item of allItems) {
			items.push(getOSItem(item).name);
		}
		return items.join(', ');
	}
}
