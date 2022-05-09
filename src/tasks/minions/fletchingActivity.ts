import { Task } from 'klasa';
import { Bank } from 'oldschooljs';

import { baseXpMultiplier } from '../../config';
import Fletching from '../../lib/skilling/skills/fletching';
import { SkillsEnum } from '../../lib/skilling/types';
import { ProductionActivityTaskOptions } from '../../lib/types/minions';
import { handleTripFinish } from '../../lib/util/handleTripFinish';

export default class extends Task {
	async run(data: ProductionActivityTaskOptions) {
		let { produceID, quantity, userID, channelID, duration } = data;
		const user = await this.client.fetchUser(userID);

		const fletchableItem = Fletching.Fletchables.find(fletchable => fletchable.id === produceID)!;

		let xpReceived = quantity * fletchableItem.xp * baseXpMultiplier;

		const xpRes = await user.addXP({
			skillName: SkillsEnum.Fletching,
			amount: xpReceived,
			duration
		});

		let sets = 'x';
		if (fletchableItem.amount) {
			sets = ' sets of';
		}
		let quantityToGive = fletchableItem.amount ? quantity * fletchableItem.amount : quantity;

		const loot = new Bank({ [fletchableItem.id]: quantityToGive });
		await user.addItemsToBank({ items: loot, collectionLog: true });

		handleTripFinish(
			this.client,
			user,
			channelID,
			`${user}, ${user.minionName} finished fletching ${quantity}${sets} ${fletchableItem.name}, and received ${loot}. ${xpRes}`,
			['fletch', [quantity, fletchableItem.id], true],
			undefined,
			data,
			loot
		);
	}
}
