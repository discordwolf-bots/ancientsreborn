import { Task } from 'klasa';
import { Bank } from 'oldschooljs';

import { baseRewardMultiplierSkilling, baseXpMultiplier } from '../../config';
import Mining from '../../lib/skilling/skills/mining';
import { SkillsEnum } from '../../lib/skilling/types';
import { GatheringActivityTaskOptions } from '../../lib/types/minions';
import { handleTripFinish } from '../../lib/util/handleTripFinish';

export default class extends Task {
	async run(data: GatheringActivityTaskOptions) {
		const { resourceID, quantity, userID, channelID, duration } = data;
		const user = await this.client.fetchUser(userID);

		const ore = Mining.Ores.find(Ore => Ore.id === resourceID)!;

		let xpReceived = quantity * ore.xp * baseXpMultiplier;

		const xpRes = await user.addXP({
			skillName: SkillsEnum.Mining,
			amount: xpReceived,
			duration
		});

		let loot = new Bank({
			[ore.id]: quantity * baseRewardMultiplierSkilling
		});

		let str = `${user}, ${user.minionName} finished mining. ${xpRes}`;

		str += `\nYou received ${loot}.`;

		await user.addItemsToBank({ items: loot, collectionLog: true });

		handleTripFinish(
			this.client,
			user,
			channelID,
			str,
			['mine', [quantity, ore.name], true],
			undefined,
			data,
			loot
		);
	}
}
