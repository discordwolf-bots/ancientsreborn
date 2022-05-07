import { calcPercentOfNum } from 'e';
import { Task } from 'klasa';
import { Bank } from 'oldschooljs';

import Fishing from '../../lib/skilling/skills/fishing';
import { SkillsEnum } from '../../lib/skilling/types';
import { FishingActivityTaskOptions } from '../../lib/types/minions';
import { anglerBoostPercent } from '../../lib/util';
import { handleTripFinish } from '../../lib/util/handleTripFinish';

export default class extends Task {
	async run(data: FishingActivityTaskOptions) {
		let { fishID, quantity, userID, channelID, duration } = data;
		const user = await this.client.fetchUser(userID);

		const fish = Fishing.Fishes.find(fish => fish.id === fishID)!;

		let xpReceived = 0;
		xpReceived = quantity * fish.xp;
		let bonusXP = 0;

		let xpRes = await user.addXP({
			skillName: SkillsEnum.Fishing,
			amount: xpReceived,
			duration
		});

		let str = `${user}, ${user.minionName} finished fishing ${quantity} ${fish.name}. ${xpRes}`;

		let lootQuantity = 0;

		let loot = new Bank({
			[fish.id]: lootQuantity
		});

		const xpBonusPercent = anglerBoostPercent(user);
		if (xpBonusPercent > 0) {
			bonusXP += Math.ceil(calcPercentOfNum(xpBonusPercent, xpReceived));
		}

		if (bonusXP > 0) {
			str += `\n\n**Bonus XP:** ${bonusXP.toLocaleString()}`;
		}

		await user.addItemsToBank({ items: loot, collectionLog: true });

		str += `\n\nYou received: ${loot}.`;

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
