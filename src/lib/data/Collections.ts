import { MessageAttachment } from 'discord.js';
import { KlasaUser } from 'klasa';
import { Bank, Monsters } from 'oldschooljs';
import { table } from 'table';

import killableMonsters, { effectiveMonsters } from '../minions/data/killableMonsters';
import { UserSettings } from '../settings/types/UserSettings';
import { ItemBank } from '../types';
import { stringMatches } from '../util';
import resolveItems from '../util/resolveItems';
import { ICollection, ILeftListStatus, IToReturnCollection } from './CollectionsExport';

export const allCollectionLogs: ICollection = {
	Bosses: {
		alias: ['boss'],
		activities: {
			// Zulrah: {
			// 	alias: Monsters.Zulrah.aliases,
			// 	allItems: Monsters.Zulrah.allItems,
			// 	items: zulrahCL
			// }
		}
	},
	Raids: {
		activities: {
			'Coming Soon': {
				alias: ['future'],
				items: resolveItems(['Credits']),

				isActivity: true
			}
		}
	},
	Other: {
		activities: {
			Skilling: {
				items: resolveItems([
					'Hatchet',
					'Master Hatchet',
					'Mythical Hatchet',
					'Pickaxe',
					'Master Pickaxe',
					'Mythical Pickaxe',
					'Fishing Rod',
					'Master Fishing Rod',
					'Mythical Fishing Rod'
				])
			}
		}
	},
	Custom: {
		activities: {
			// Quest: {
			// 	counts: false,
			// 	items: questCL
			// },
		}
	}
};
// Get all items, from all monsters and all CLs into a variable, for uses like mostdrops
export const allDroppedItems = [
	...new Set([
		...Object.entries(allCollectionLogs)
			.map(e =>
				Object.entries(e[1].activities).map(a => [
					...new Set([...a[1].items, ...(a[1].allItems !== undefined ? a[1].allItems : [])])
				])
			)
			.flat(100),
		...Object.values(Monsters)
			.map(m => (m && m.allItems ? m.allItems : []))
			.flat(100)
	])
];

export const allCLItems = [
	...new Set(
		Object.entries(allCollectionLogs)
			.map(e => Object.entries(e[1].activities).map(a => a[1].items))
			.flat(100)
	)
];

export const allCLItemsFiltered = [
	...new Set(
		Object.entries(allCollectionLogs)
			.map(e =>
				Object.entries(e[1].activities)
					.filter(f => f[1].counts === undefined)
					.map(a => a[1].items)
			)
			.flat(100)
	)
];
export function convertCLtoBank(items: number[]) {
	const clBank = new Bank();
	for (const item of items) {
		clBank.add(item, 1);
	}
	return clBank;
}

// Get the left list to be added to the cls
function getLeftList(
	userBank: Bank,
	checkCategory: string,
	allItems: boolean = false,
	removeCoins = false
): ILeftListStatus {
	let leftList: ILeftListStatus = {};
	for (const [category, entries] of Object.entries(allCollectionLogs)) {
		if (category === checkCategory) {
			// Sort list by alphabetical order
			const catEntries = Object.entries(entries.activities).sort((a, b) => 0 - (a > b ? -1 : 1));
			for (const [activityName, attributes] of catEntries) {
				let items: number[] = [];
				if (allItems && attributes.allItems) {
					items = [...new Set([...attributes.items, ...attributes.allItems])];
				} else {
					items = [...new Set(attributes.items)];
				}
				if (removeCoins && items.includes(995)) items.splice(items.indexOf(995), 1);
				const [totalCl, userAmount] = getUserClData(userBank.bank, items);
				leftList[activityName] =
					userAmount === 0 ? 'not_started' : userAmount === totalCl ? 'completed' : 'started';
			}
		}
	}
	return leftList;
}

export function getBank(user: KlasaUser, type: 'sacrifice' | 'bank' | 'collection' | 'temp') {
	const userCheckBank = new Bank();
	switch (type) {
		case 'collection':
			userCheckBank.add(user.settings.get(UserSettings.CollectionLogBank));
			break;
		case 'bank':
			userCheckBank.add(user.bank({ withGP: true }));
			break;
		case 'sacrifice':
			userCheckBank.add(user.settings.get(UserSettings.SacrificedBank));
			break;
		case 'temp':
			userCheckBank.add(user.settings.get(UserSettings.TempCL));
			break;
	}
	return userCheckBank;
}

// Get the total items the user has in its CL and the total items to collect
export function getTotalCl(user: KlasaUser, logType: 'sacrifice' | 'bank' | 'collection' | 'temp') {
	return getUserClData(getBank(user, logType).bank, allCLItemsFiltered);
}

export function getPossibleOptions() {
	const roles: [string, string, string][] = [];
	const categories: [string, string, string][] = [];
	const activities: [string, string, string][] = [];

	// Get categories and enabled activities
	for (const [category, entries] of Object.entries(allCollectionLogs)) {
		categories.push(['General', category, entries.alias ? entries.alias.join(', ') : '']);
		for (const [activityName, attributes] of Object.entries(entries.activities)) {
			categories.push(['Activity', activityName, attributes.alias ? attributes.alias.join(', ') : '']);
		}
	}

	// get monsters
	for (const monster of effectiveMonsters) {
		categories.push(['Monsters', monster.name, monster.aliases ? monster.aliases.join(', ') : '']);
	}
	const normalTable = table([['Type', 'Name', 'Alias'], ...[...categories, ...activities, ...roles]]);
	return new MessageAttachment(Buffer.from(normalTable), 'possible_logs.txt');
}

export function getCollectionItems(collection: string, allItems = false, removeCoins = false): number[] {
	if (['overall', 'all'].some(s => stringMatches(collection, s))) {
		return allCLItemsFiltered;
	}

	let _items: number[] = [];
	loop: for (const [category, entries] of Object.entries(allCollectionLogs)) {
		if (
			stringMatches(category, collection) ||
			(entries.alias && entries.alias.some(a => stringMatches(a, collection)))
		) {
			_items = [
				...new Set(
					Object.entries(entries.activities)

						.map(e => [...new Set([...e[1].items, ...(allItems && e[1].allItems ? e[1].allItems : [])])])
						.flat(2)
				)
			];
			break;
		}
		for (const [activityName, attributes] of Object.entries(entries.activities)) {
			if (
				stringMatches(activityName, collection) ||
				(attributes.alias && attributes.alias.find(a => stringMatches(a, collection)))
			) {
				_items = [
					...new Set([...attributes.items, ...(allItems && attributes.allItems ? attributes.allItems : [])])
				];
				break loop;
			}
		}
	}

	if (_items.length === 0) {
		const _monster = killableMonsters.find(
			m => stringMatches(m.name, collection) || m.aliases.some(name => stringMatches(name, collection))
		);
		if (_monster) {
			_items = Array.from(new Set(Object.values(Monsters.get(_monster!.id)!.allItems!).flat(100))) as number[];
		}
	}
	if (removeCoins && _items.includes(995)) _items.splice(_items.indexOf(995), 1);
	return _items;
}

function getUserClData(usarBank: ItemBank, clItems: number[]) {
	const owned = Object.keys(usarBank).filter(i => clItems.includes(Number(i)));
	return [clItems.length, owned.length];
}

// Main function that gets the user collection based on its search parameter
export async function getCollection(options: {
	user: KlasaUser;
	search: string;
	flags: { [key: string]: string | number };
	logType?: 'collection' | 'sacrifice' | 'bank' | 'temp';
}): Promise<false | IToReturnCollection> {
	let { user, search, flags, logType } = options;

	await user.settings.sync(true);

	const allItems = Boolean(flags.all);
	if (logType === undefined) logType = 'collection';

	const userCheckBank = getBank(user, logType);
	let clItems = getCollectionItems(search, allItems, logType === 'sacrifice');

	if (Boolean(flags.missing)) {
		clItems = clItems.filter(i => !userCheckBank.has(i));
	}

	const [totalCl, userAmount] = getUserClData(userCheckBank.bank, clItems);

	for (const [category, entries] of Object.entries(allCollectionLogs)) {
		if (stringMatches(category, search) || (entries.alias && entries.alias.some(a => stringMatches(a, search)))) {
			return {
				category,
				name: category,
				collection: clItems,
				collectionObtained: userAmount,
				collectionTotal: totalCl,
				leftList: getLeftList(userCheckBank, category, allItems, logType === 'sacrifice'),
				userItems: userCheckBank,
				counts: false
			};
		}
		for (const [activityName, attributes] of Object.entries(entries.activities)) {
			if (
				stringMatches(activityName, search) ||
				(attributes.alias && attributes.alias.find(a => stringMatches(a, search)))
			) {
				let userKC: Record<string, number> | undefined = { Default: 0 };

				// Defaults to the activity name
				if (attributes.kcActivity) {
					if (typeof attributes.kcActivity === 'string') {
						userKC.Default += (await user.getKCByName(attributes.kcActivity))[1];
					} else {
						for (const [type, value] of Object.entries(attributes.kcActivity)) {
							if (!userKC[type]) userKC[type] = 0;
							if (Array.isArray(value)) {
								for (const name of value) {
									userKC[type] += (await user.getKCByName(name))[1];
								}
							} else if (typeof value === 'function') {
								userKC[type] += await value(user);
							} else {
								userKC[type] += (await user.getKCByName(value))[1];
							}
						}
					}
				} else {
					const defaultKc = await user.getKCByName(activityName);
					if (defaultKc[0] !== null) userKC.Default += defaultKc[1];
					else userKC = undefined;
				}
				return {
					category,
					name: activityName,
					collection: clItems,
					completions: userKC,
					isActivity: attributes.isActivity,
					collectionObtained: userAmount,
					collectionTotal: totalCl,
					leftList: getLeftList(
						userCheckBank,
						category,
						allItems && attributes.allItems !== undefined,
						logType === 'sacrifice'
					),
					userItems: userCheckBank,
					counts: attributes.counts ?? true
				};
			}
		}
	}

	const monster = killableMonsters.find(
		_type => stringMatches(_type.name, search) || _type.aliases.some(name => stringMatches(name, search))
	);
	if (monster) {
		return {
			category: 'Other',
			name: monster.name,
			collection: clItems,
			completions: { Default: user.getKC(monster.id) },
			collectionObtained: userAmount,
			collectionTotal: totalCl,
			userItems: userCheckBank,
			counts: false
		};
	}

	return false;
}
