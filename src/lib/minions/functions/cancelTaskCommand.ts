import { KlasaMessage } from 'klasa';

import { cancelTask, getActivityOfUser } from '../../settings/settings';

export async function cancelTaskCommand(msg: KlasaMessage) {
	const currentTask = getActivityOfUser(msg.author.id);

	if (!currentTask) {
		return msg.channel.send(
			`${msg.author.minionName} isn't doing anything at the moment, so there's nothing to cancel.`
		);
	}

	if (currentTask.type === 'GroupMonsterKilling') {
		return msg.channel.send(
			`${msg.author.minionName} is in a group PVM trip, their team wouldn't like it if they left!`
		);
	}

	await msg.confirm(
		`${msg.author} ${msg.author.minionStatus}\n Please confirm if you want to call your minion back from their trip. ` +
			"They'll **drop** all their current **loot and supplies** to get back as fast as they can, so you won't receive any loot from this trip if you cancel it, and you will lose any supplies you spent to start this trip, if any."
	);

	await cancelTask(msg.author.id);

	return msg.channel.send(`${msg.author.minionName}'s trip was cancelled, and they're now available.`);
}
