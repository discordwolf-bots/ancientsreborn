import { Bank } from 'oldschooljs';

import { ItemBank, Skills } from '../types';
import itemID from '../util/itemID';

export interface Createable {
	name: string;
	outputItems: ItemBank | Bank;
	inputItems: ItemBank | Bank;
	cantHaveItems?: ItemBank;
	requiredSkills?: Skills;
	QPRequired?: number;
	noCl?: boolean;
	GPCost?: number;
	cantBeInCL?: boolean;
	maxCanOwn?: number;
}

const Createables: Createable[] = [
	{
		name: 'Godsword blade',
		inputItems: {
			[itemID('Godsword shard 1')]: 1,
			[itemID('Godsword shard 2')]: 1,
			[itemID('Godsword shard 3')]: 1
		},
		outputItems: {
			[itemID('Godsword blade')]: 1
		}
	}
];

export default Createables;
