import { ApplicationCommandOptionType, CommandRunOptions } from 'mahoji';

import { client } from '../..';
import { PvMMethod } from '../../lib/constants';
import { effectiveMonsters } from '../../lib/minions/data/killableMonsters';
import { minionKillCommand } from '../lib/abstracted_commands/minionKill';
import { OSBMahojiCommand } from '../lib/util';

export const killCommand: OSBMahojiCommand = {
	name: 'k',
	description: 'Send your minion to kill things.',
	attributes: {
		requiresMinion: true,
		requiresMinionNotBusy: true,
		description: 'Send your minion to kill things.',
		examples: ['/k zulrah']
	},
	options: [
		{
			type: ApplicationCommandOptionType.String,
			name: 'name',
			description: 'The thing you want to kill.',
			required: true,
			autocomplete: async value => {
				return effectiveMonsters
					.filter(m =>
						!value
							? true
							: [m.name.toLowerCase(), ...m.aliases].some(str => str.includes(value.toLowerCase()))
					)
					.map(i => ({ name: i.name, value: i.name }));
			}
		},
		{
			type: ApplicationCommandOptionType.Number,
			name: 'quantity',
			description: 'The amount you want to kill.',
			required: false,
			min_value: 0
		}
	],
	run: async ({
		options,
		userID,
		channelID
	}: CommandRunOptions<{ name: string; quantity?: number; method?: PvMMethod }>) => {
		const user = await client.fetchUser(userID);
		return minionKillCommand(user, channelID, options.name, options.quantity);
	}
};
