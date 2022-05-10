import { Client } from 'klasa';

Client.defaultClientSchema
	.add('commandStats', 'any', { default: {} })
	.add('totalCommandsUsed', 'integer', { default: 0 })
	.add('prices', 'any', { default: {} })
	.add('sold_items_bank', 'any', { default: {} })
	.add('economyStats', folder =>
		folder
			.add('duelTaxBank', 'number', { default: 0 })
			.add('itemSellTaxBank', 'number', { default: 0 })
			.add('bankBgCostBank', 'any', { default: {} })
			.add('sacrificedBank', 'any', { default: {} })
			.add('PVMCost', 'any', { default: {} })
	)
	.add('gp_sell', 'integer', { default: 0, maximum: Number.MAX_SAFE_INTEGER })
	.add('gp_pvm', 'integer', { default: 0, maximum: Number.MAX_SAFE_INTEGER })
	.add('gp_open', 'integer', { default: 0, maximum: Number.MAX_SAFE_INTEGER })
	.add('locked_skills', 'any', { array: true, default: [] })
	.add('custom_prices', 'any', { default: {} })
	.add('create_cost', 'any', { default: {} })
	.add('create_loot', 'any', { default: {} });
