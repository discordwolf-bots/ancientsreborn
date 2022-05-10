import { KlasaUser } from 'klasa';
import { Bank } from 'oldschooljs';

import { ItemBank, Skills } from '../../types';
import { resolveNameBank } from '../../util';

export interface Buyable {
	name: string;
	outputItems?: ItemBank | Bank;
	qpRequired?: number;
	gpCost?: number;
	itemCost?: ItemBank;
	aliases?: string[];
	skillsNeeded?: Skills;
	restockTime?: number;
	ironmanPrice?: number;
	customReq?: (user: KlasaUser) => Promise<[true] | [false, string]>;
}

const Buyables: Buyable[] = [
	{
		name: 'Salve amulet',
		gpCost: 200_000,
		skillsNeeded: {
			strength: 35
		}
	},
	{
		name: 'Sandworms',
		gpCost: 500
	},
	{
		name: 'Granite Body',
		gpCost: 95_000
	},
	{
		name: 'Raw shark',
		itemCost: resolveNameBank({
			Minnow: 40
		}),
		outputItems: resolveNameBank({
			'Raw shark': 1
		})
	}
];

export default Buyables;
