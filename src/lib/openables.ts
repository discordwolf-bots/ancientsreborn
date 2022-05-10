import { KlasaUser } from 'klasa';
import { Bank, LootTable, Openables } from 'oldschooljs';
import { Item } from 'oldschooljs/dist/meta/types';
import { Implings } from 'oldschooljs/dist/simulation/openables/Implings';

import getOSItem from './util/getOSItem';

interface OpenArgs {
	quantity: number;
	user: KlasaUser;
	self: UnifiedOpenable;
}

interface UnifiedOpenable {
	name: string;
	id: number;
	openedItem: Item;
	output:
		| LootTable
		| ((args: OpenArgs) => Promise<{
				bank: Bank;
				message?: string;
		  }>);
	emoji?: string;
	aliases: string[];
	allItems: number[];
}

const osjsOpenables: UnifiedOpenable[] = [
	{
		name: 'Brimstone chest',
		id: 23_083,
		openedItem: getOSItem(23_083),
		aliases: ['brimstone chest', 'brimstone'],
		output: Openables.BrimstoneChest.table,
		allItems: Openables.BrimstoneChest.table.allItems
	},
	{
		name: 'Elven crystal chest',
		id: 23_951,
		openedItem: getOSItem(23_951),
		aliases: ['elven crystal chest', 'elven chest', 'enhanced', 'enhanced crystal chest', 'elven chest', 'elven'],
		output: Openables.ElvenCrystalChest.table,
		allItems: Openables.ElvenCrystalChest.table.allItems
	},
	{
		name: 'Giant egg sac(full)',
		id: 23_517,
		openedItem: getOSItem(23_517),
		aliases: ['giant egg sac(full)', 'giant egg sac full'],
		output: Openables.GiantEggSacFull.table,
		allItems: Openables.GiantEggSacFull.table.allItems
	},
	{
		name: 'Grubby chest',
		id: 23_499,
		openedItem: getOSItem(23_499),
		aliases: ['grubby chest', 'grubby'],
		output: Openables.GrubbyChest.table,
		allItems: Openables.GrubbyChest.table.allItems
	},
	{
		name: 'Bronze HAM chest',
		id: 8867,
		openedItem: getOSItem(8867),
		aliases: ['bronze', 'bronze ham chest', 'bronze chest'],
		output: Openables.BronzeHAMChest.table,
		allItems: Openables.BronzeHAMChest.table.allItems
	},
	{
		name: 'Iron HAM chest',
		id: 8869,
		openedItem: getOSItem(8869),
		aliases: ['iron', 'iron ham chest', 'iron chest'],
		output: Openables.IronHAMChest.table,
		allItems: Openables.IronHAMChest.table.allItems
	},
	{
		name: 'Silver HAM chest',
		id: 8868,
		openedItem: getOSItem(8868),
		aliases: ['silver', 'silver ham chest', 'silver chest'],
		output: Openables.SilverHAMChest.table,
		allItems: Openables.SilverHAMChest.table.allItems
	},
	{
		name: 'Steel HAM chest',
		id: 8866,
		openedItem: getOSItem(8866),
		aliases: ['steel', 'steel ham chest', 'steel chest'],
		output: Openables.SteelHAMChest.table,
		allItems: Openables.SteelHAMChest.table.allItems
	},
	{
		name: "Larran's chest",
		id: 23_490,
		openedItem: getOSItem(23_490),
		aliases: [
			'larran big chest',
			'larrans big chest',
			"larran's big chest",
			"larran's small chest",
			'larran small chest',
			'larrans small chest',
			"larran's small chest"
		],
		output: Openables.LarransChest.table,
		allItems: Openables.LarransChest.table.allItems
	},
	{
		name: 'Muddy chest',
		id: 991,
		openedItem: getOSItem(991),
		aliases: ['muddy chest', 'muddy'],
		output: Openables.MuddyChest.table,
		allItems: Openables.MuddyChest.table.allItems
	},
	{
		name: 'Mystery box',
		id: 6199,
		openedItem: getOSItem(6199),
		aliases: ['mystery box', 'mystery', 'mbox'],
		output: Openables.MysteryBox.table,
		allItems: Openables.MysteryBox.table.allItems
	},
	{
		name: 'Nest box (empty)',
		id: 12_792,
		openedItem: getOSItem(12_792),
		aliases: ['nest box (empty)', 'empty nest box', 'nest box empty'],
		output: Openables.NestBoxEmpty.table,
		allItems: Openables.NestBoxEmpty.table.allItems
	},
	{
		name: 'Nest box (ring)',
		id: 12_794,
		openedItem: getOSItem(12_794),
		aliases: ['nest box (ring)', 'ring nest box', 'nest box ring'],
		output: Openables.NestBoxRing.table,
		allItems: Openables.NestBoxRing.table.allItems
	},
	{
		name: 'Nest box (seeds)',
		id: 12_793,
		openedItem: getOSItem(12_793),
		aliases: ['nest box (seeds)', 'seeds nest box', 'nest box seeds', 'seed nest box'],
		output: Openables.NestBoxSeeds.table,
		allItems: Openables.NestBoxSeeds.table.allItems
	},
	{
		name: 'Ogre coffin',
		id: 4850,
		openedItem: getOSItem(4850),
		aliases: ['ogre coffin', 'ogre chest', 'ogre coffin chest'],
		output: Openables.OgreCoffin.table,
		allItems: Openables.OgreCoffin.table.allItems
	},
	{
		name: 'Sinister chest',
		id: 993,
		openedItem: getOSItem(993),
		aliases: ['sinister chest', 'sinister'],
		output: Openables.SinisterChest.table,
		allItems: Openables.SinisterChest.table.allItems
	}
];

for (const impling of Implings) {
	osjsOpenables.push({
		name: impling.name,
		id: impling.id,
		openedItem: getOSItem(impling.id),
		aliases: [...impling.aliases, `${impling.name} jar`],
		output: impling.table,
		allItems: impling.table.allItems
	});
}

export const allOpenables: UnifiedOpenable[] = [...osjsOpenables];

for (const openable of allOpenables) {
	openable.aliases.push(openable.openedItem.name);
	openable.aliases.push(openable.id.toString());
}

export const allOpenablesIDs = new Set(allOpenables.map(i => i.id));
