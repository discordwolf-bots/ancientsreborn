import { Task } from 'klasa';
import { Bank } from 'oldschooljs';

import { baseRewardMultiplierSkilling, baseXpMultiplier } from '../../config';
import Woodcutting from '../../lib/skilling/skills/woodcutting';
import { SkillsEnum } from '../../lib/skilling/types';
import { GatheringActivityTaskOptions } from '../../lib/types/minions';
import { handleTripFinish } from '../../lib/util/handleTripFinish';

export default class extends Task {
	async run(data: GatheringActivityTaskOptions) {
		const { resourceID, quantity, userID, channelID, duration } = data;
		const user = await this.client.fetchUser(userID);

		const log = Woodcutting.Logs.find(Log => Log.id === resourceID)!;

		let xpReceived = quantity * log.xp * baseXpMultiplier;

		const xpRes = await user.addXP({
			skillName: SkillsEnum.Woodcutting,
			amount: xpReceived,
			duration
		});

		let loot = new Bank({
			[log.id]: quantity * baseRewardMultiplierSkilling
		});

		let str = `${user}, ${user.minionName} finished woodcutting. ${xpRes}`;

		str += `\nYou received ${loot}.`;

		await user.addItemsToBank({ items: loot, collectionLog: true });

		handleTripFinish(
			this.client,
			user,
			channelID,
			str,
			['chop', [quantity, log.name], true],
			undefined,
			data,
			loot
		);
	}
}
