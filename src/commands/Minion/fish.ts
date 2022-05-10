import { calcPercentOfNum, Time } from 'e';
import { CommandStore, KlasaMessage } from 'klasa';

import { minionNotBusy, requiresMinion } from '../../lib/minions/decorators';
import Fishing from '../../lib/skilling/skills/fishing';
import { SkillsEnum } from '../../lib/skilling/types';
import { BotCommand } from '../../lib/structures/BotCommand';
import { GatheringActivityTaskOptions } from '../../lib/types/minions';
import { formatDuration, rand, stringMatches } from '../../lib/util';
import addSubTaskToActivityTask from '../../lib/util/addSubTaskToActivityTask';

export default class extends BotCommand {
	public constructor(store: CommandStore, file: string[], directory: string) {
		super(store, file, directory, {
			altProtection: true,
			usage: '<quantity:int{1}|name:...string> [name:...string]',
			usageDelim: ' ',
			description: 'Sends your minion to fish.',
			examples: ['+fish raw shrimps'],
			categoryFlags: ['minion', 'skilling']
		});
	}

	@requiresMinion
	@minionNotBusy
	async run(msg: KlasaMessage, [quantity, name = '']: [null | number | string, string]) {
		if (typeof quantity === 'string') {
			name = quantity;
			quantity = null;
		}

		await msg.author.settings.sync(true);
		const fish = Fishing.Fishes.find(
			fish => stringMatches(fish.name, name) || fish.alias?.some(alias => stringMatches(alias, name))
		);
		if (!fish) {
			return msg.channel.send(
				`Thats not a valid fish to catch. Valid fishes are ${Fishing.Fishes.map(fish => fish.name).join(', ')}.`
			);
		}

		if (msg.author.skillLevel(SkillsEnum.Fishing) < fish.level) {
			return msg.channel.send(`${msg.author.minionName} needs ${fish.level} Fishing to fish ${fish.name}.`);
		}

		// If no quantity provided, set it to the max.
		let scaledTimePerFish = Time.Second * 10 * (1 + (100 - msg.author.skillLevel(SkillsEnum.Fishing)) / 100);

		const boosts: any[] = [];

		const maxTripLength = msg.author.maxTripLength('Fishing');

		if (quantity === null) {
			quantity = Math.floor(maxTripLength / scaledTimePerFish);
		}

		let duration = quantity * scaledTimePerFish;

		if (duration > maxTripLength) {
			return msg.channel.send(
				`${msg.author.minionName} can't go on trips longer than ${formatDuration(
					maxTripLength
				)}, try a lower quantity. The highest amount of ${fish.name} you can fish is ${Math.floor(
					maxTripLength / scaledTimePerFish
				)}.`
			);
		}

		const tenPercent = Math.floor(calcPercentOfNum(10, duration));
		duration += rand(-tenPercent, tenPercent);

		await addSubTaskToActivityTask<GatheringActivityTaskOptions>({
			resourceID: fish.id,
			userID: msg.author.id,
			channelID: msg.channel.id,
			quantity,
			duration,
			type: 'Fishing'
		});

		let response = `${msg.author.minionName} is now fishing ${quantity}x ${
			fish.name
		}, it'll take around ${formatDuration(duration)} to finish.`;

		if (boosts.length > 0) {
			response += `\n\n**Boosts:** ${boosts.join(', ')}.`;
		}

		return msg.channel.send(response);
	}
}
