import { Task } from 'klasa';
import { MonsterKillOptions } from 'oldschooljs';

import { PvMMethod } from '../../lib/constants';
import killableMonsters from '../../lib/minions/data/killableMonsters';
import { addMonsterXP } from '../../lib/minions/functions';
import announceLoot from '../../lib/minions/functions/announceLoot';
import { trackLoot } from '../../lib/settings/prisma';
import { runCommand } from '../../lib/settings/settings';
import { MonsterActivityTaskOptions } from '../../lib/types/minions';
import { handleTripFinish } from '../../lib/util/handleTripFinish';

export default class extends Task {
	async run(data: MonsterActivityTaskOptions) {
		const { monsterID, userID, channelID, quantity, duration } = data;
		const monster = killableMonsters.find(mon => mon.id === monsterID)!;
		const user = await this.client.fetchUser(userID);
		await user.incrementMonsterScore(monsterID, quantity);

		const killOptions: MonsterKillOptions = {
			areaSkull: monster.areaSkull
		};

		// Regular loot
		const loot = monster.table.kill(quantity, killOptions);
		if (monster.specialLoot) {
			monster.specialLoot(loot, user, data);
		}

		const xpRes = await addMonsterXP(user, {
			monsterID,
			quantity,
			duration,
			minimal: true
		});

		announceLoot({ user, monsterID: monster.id, loot, notifyDrops: monster.notifyDrops });

		let str =
			`${user}, ${user.minionName} finished killing ${quantity} ${monster.name}.` +
			` Your ${monster.name} KC is now ${user.getKC(monsterID)}.\n${xpRes}\n`;

		const { previousCL, itemsAdded } = await user.addItemsToBank({ items: loot, collectionLog: true });

		await trackLoot({
			loot: itemsAdded,
			id: monster.name.toString(),
			type: 'Monster',
			changeType: 'loot',
			kc: quantity,
			duration
		});

		const { image } = await this.client.tasks
			.get('bankImage')!
			.generateBankImage(
				itemsAdded,
				`Loot From ${quantity} ${monster.name}:`,
				true,
				{ showNewCL: 1 },
				user,
				previousCL
			);

		handleTripFinish(
			this.client,
			user,
			channelID,
			str,
			res => {
				user.log(`continued trip of killing ${monster.name}`);
				let method: PvMMethod = 'none';
				return runCommand({
					message: res,
					commandName: 'k',
					args: {
						name: monster.name,
						quantity,
						method
					},
					isContinue: true
				});
			},
			image!,
			data,
			itemsAdded
		);
	}
}
