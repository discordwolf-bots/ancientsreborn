import { User } from 'discord.js';
import { Extendable, ExtendableStore } from 'klasa';
import { itemID } from 'oldschooljs/dist/util';

import { getSimilarItems, similarItems } from '../../lib/data/similarItems';
import { defaultGear, GearSetupType, resolveGearTypeSetting } from '../../lib/gear';
import { GearSetup, UserFullGearSetup } from '../../lib/gear/types';
import { Gear } from '../../lib/structures/Gear';
import { userHasItemsEquippedAnywhere } from '../../lib/util/minionUtils';

export default class extends Extendable {
	public constructor(store: ExtendableStore, file: string[], directory: string) {
		super(store, file, directory, { appliesTo: [User] });
	}

	public rawGear(this: User): UserFullGearSetup {
		const ranged = this.getGear('ranged');
		const melee = this.getGear('melee');
		const magic = this.getGear('magic');
		const skilling = this.getGear('skilling');

		return {
			melee,
			ranged,
			skilling,
			magic
		};
	}

	public hasItemEquippedAnywhere(this: User, _item: number | string | string[] | number[], every = false): boolean {
		return userHasItemsEquippedAnywhere(this, _item, every);
	}

	public hasItemEquippedOrInBank(this: User, item: number | string) {
		const id = typeof item === 'string' ? itemID(item) : item;
		if (similarItems.get(id) === undefined) {
			return this.hasItemEquippedAnywhere(id, false) || this.bank().amount(id) > 0;
		}
		const bank = this.bank();
		return this.hasItemEquippedAnywhere(getSimilarItems(id), false) || getSimilarItems(id).some(id => bank.has(id));
	}

	public getGear(this: User, setup: GearSetupType): GearSetup {
		return new Gear(this.settings.get(resolveGearTypeSetting(setup)) ?? defaultGear);
	}
}
