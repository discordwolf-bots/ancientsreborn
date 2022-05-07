import { Task } from 'klasa';
import { Bank } from 'oldschooljs';

import Woodcutting from '../../lib/skilling/skills/woodcutting';
import { SkillsEnum } from '../../lib/skilling/types';
import { WoodcuttingActivityTaskOptions } from '../../lib/types/minions';
import { handleTripFinish } from '../../lib/util/handleTripFinish';

export default class extends Task {
	async run(data: WoodcuttingActivityTaskOptions) {
		const { logID, quantity, userID, channelID, duration } = data;
		const user = await this.client.fetchUser(userID);

		const log = Woodcutting.Logs.find(Log => Log.id === logID)!;

		let xpReceived = quantity * log.xp;
		let bonusXP = 0;

		const xpRes = await user.addXP({
			skillName: SkillsEnum.Woodcutting,
			amount: xpReceived,
			duration
		});

		let loot = new Bank({
			[log.id]: quantity
		});

		let str = `${user}, ${user.minionName} finished woodcutting. ${xpRes}`;

		if (bonusXP > 0) {
			str += `. **Bonus XP:** ${bonusXP.toLocaleString()}`;
		}

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
