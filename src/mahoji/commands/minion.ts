import { ApplicationCommandOptionType, CommandRunOptions } from 'mahoji';

import { client } from '../..';
import { minionStatsEmbed } from '../../lib/util/minionStatsEmbed';
import BankImageTask from '../../tasks/bankImage';
import { bankBgCommand } from '../lib/abstracted_commands/bankBgCommand';
import { questCommand } from '../lib/abstracted_commands/questCommand';
import { OSBMahojiCommand } from '../lib/util';
import { MahojiUserOption } from '../mahojiSettings';

export const minionCommand: OSBMahojiCommand = {
	name: 'minion',
	description: 'Manage and control your minion.',
	options: [
		{
			type: ApplicationCommandOptionType.Subcommand,
			name: 'stats',
			description: 'Check the stats of your minion.'
		},
		{
			type: ApplicationCommandOptionType.Subcommand,
			name: 'bankbg',
			description: 'Change your bank background.',
			options: [
				{
					type: ApplicationCommandOptionType.String,
					name: 'name',
					description: 'The name of the bank background you want.',
					autocomplete: async value => {
						const bankImages = (client.tasks.get('bankImage') as BankImageTask).backgroundImages;
						return bankImages
							.filter(bg => (!value ? true : bg.available))
							.filter(bg => (!value ? true : bg.name.toLowerCase().includes(value.toLowerCase())))
							.map(i => {
								const name = i.perkTierNeeded
									? `${i.name} (Tier ${i.perkTierNeeded - 1} patrons)`
									: i.name;
								return { name, value: i.name };
							});
					}
				}
			]
		},
		{
			type: ApplicationCommandOptionType.Subcommand,
			name: 'quest',
			description: 'Send your minion to do quests.'
		}
	],
	run: async ({
		userID,
		options,
		channelID,
		interaction
	}: CommandRunOptions<{
		birthdayevent?: {};
		stats?: {};
		achievementdiary?: { diary?: string; claim?: boolean };
		bankbg?: { name?: string };
		cracker?: { user: MahojiUserOption };
		quest?: {};
	}>) => {
		const user = await client.fetchUser(userID.toString());

		if (options.stats) {
			return { embeds: [await minionStatsEmbed(user)] };
		}

		if (options.bankbg) {
			return bankBgCommand(interaction, user, options.bankbg.name ?? '');
		}
		if (options.quest) {
			return questCommand(user, channelID);
		}

		return 'Unknown command';
	}
};
