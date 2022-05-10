import { EquipmentSlot, Item } from 'oldschooljs/dist/meta/types';

import { UserSettings } from '../settings/types/UserSettings';
import { Gear } from '../structures/Gear';
import { itemID, itemNameFromID, toTitleCase } from '../util';
import getOSItem from '../util/getOSItem';
import { GearSetup, GearSetupType } from '.';
import { GearPreset } from '.prisma/client';

export function itemInSlot(setup: GearSetup, slot: EquipmentSlot): [null, null] | [Item, number] {
	const equipped = setup[slot];
	if (!equipped) return [null, null];
	return [getOSItem(equipped.item), equipped.quantity];
}

export function readableStatName(slot: string) {
	return toTitleCase(slot.replace('_', ' '));
}

export function resolveGearTypeSetting(type: GearSetupType) {
	switch (type) {
		case 'melee':
			return UserSettings.Gear.Melee;
		case 'magic':
			return UserSettings.Gear.Magic;
		case 'ranged':
			return UserSettings.Gear.Range;
		case 'skilling':
			return UserSettings.Gear.Skilling;
	}
}

export type PartialGearSetup = Partial<{
	[key in EquipmentSlot]: string;
}>;
export function constructGearSetup(setup: PartialGearSetup): Gear {
	return new Gear({
		'2h': setup['2h'] ? { item: itemID(setup['2h']), quantity: 1 } : null,
		ammo: setup.ammo ? { item: itemID(setup.ammo), quantity: 1 } : null,
		chest: setup.chest ? { item: itemID(setup.chest), quantity: 1 } : null,
		cape: setup.cape ? { item: itemID(setup.cape), quantity: 1 } : null,
		boots: setup.boots ? { item: itemID(setup.boots), quantity: 1 } : null,
		gloves: setup.gloves ? { item: itemID(setup.gloves), quantity: 1 } : null,
		helm: setup.helm ? { item: itemID(setup.helm), quantity: 1 } : null,
		legs: setup.legs ? { item: itemID(setup.legs), quantity: 1 } : null,
		neck: setup.neck ? { item: itemID(setup.neck), quantity: 1 } : null,
		ring: setup.ring ? { item: itemID(setup.ring), quantity: 1 } : null,
		shield: setup.shield ? { item: itemID(setup.shield), quantity: 1 } : null,
		weapon: setup.weapon ? { item: itemID(setup.weapon), quantity: 1 } : null,
		belt: setup.belt ? { item: itemID(setup.belt), quantity: 1 } : null,
		gems: setup.gems ? { item: itemID(setup.gems), quantity: 1 } : null
	});
}

export function gearPresetToString(gearPreset: GearPreset) {
	let parsed = [];
	const keys = Object.keys(gearPreset) as (keyof GearPreset)[];
	for (const key of keys) {
		if (key === 'user_id' || key === 'ammo_qty' || key === 'name') continue;
		let val = gearPreset[key];
		if (val) parsed.push(itemNameFromID(val as string));
	}
	if (gearPreset.ammo) {
		parsed.push(`${gearPreset.ammo_qty}x ${itemNameFromID(gearPreset.ammo)}`);
	}
	return parsed.join(', ');
}
