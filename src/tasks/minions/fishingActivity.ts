import { Task } from 'klasa';
import { Bank } from 'oldschooljs';

import { baseRewardMultiplierSkilling, baseXpMultiplier } from '../../config';
import Fishing from '../../lib/skilling/skills/fishing';
import { SkillsEnum } from '../../lib/skilling/types';
import { GatheringActivityTaskOptions } from '../../lib/types/minions';
import { handleTripFinish } from '../../lib/util/handleTripFinish';

export default class extends Task {
	async run(data: GatheringActivityTaskOptions) {
		const { resourceID, quantity, userID, channelID, duration } = data;
		const user = await this.client.fetchUser(userID);

		const fish = Fishing.Fishes.find(Fish => Fish.id === resourceID)!;

		let xpReceived = quantity * fish.xp * baseXpMultiplier;

		const xpRes = await user.addXP({
			skillName: SkillsEnum.Mining,
			amount: xpReceived,
			duration
		});

		let loot = new Bank({
			[fish.id]: quantity * baseRewardMultiplierSkilling
		});

		let str = `${user}, ${user.minionName} finished fishing. ${xpRes}`;

		str += `\nYou received ${loot}.`;

		await user.addItemsToBank({ items: loot, collectionLog: true });

		handleTripFinish(
			this.client,
			user,
			channelID,
			str,
			['fish', [quantity, fish.name], true],
			undefined,
			data,
			loot
		);
	}
}
