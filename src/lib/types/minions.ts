// import { ItemBank } from '.';
import { activity_type_enum } from '.prisma/client';

export interface ActivityTaskOptions {
	type: activity_type_enum;
	userID: string;
	duration: number;
	id: number;
	finishDate: number;
	channelID: string;
}

/**
 *  Mining,
	Fishing,
	Woodcutting,
	Gathering,
	Metallurgy,
	Blacksmithing,
	Cooking,
	Carpentry,
	Weaving,
	Fletching,
	Tailoring,
 */

export interface GatheringActivityTaskOptions extends ActivityTaskOptions {
	resourceID: number;
	quantity: number;
}

export interface ProductionActivityTaskOptions extends ActivityTaskOptions {
	produceID: number;
	quantity: number;
}

export interface ActivityTaskOptionsWithQuantity extends ActivityTaskOptions {
	quantity: number;
}

export interface CookingActivityTaskOptions extends ActivityTaskOptions {
	cookableID: number;
	quantity: number;
}

export interface MonsterActivityTaskOptions extends ActivityTaskOptions {
	monsterID: number;
	quantity: number;
}

export interface FletchingActivityTaskOptions extends ActivityTaskOptions {
	fletchableName: string;
	quantity: number;
}

export interface GroupMonsterActivityTaskOptions extends MonsterActivityTaskOptions {
	leader: string;
	users: string[];
}

export interface CollectingOptions extends ActivityTaskOptions {
	collectableID: number;
	quantity: number;
}

export type ActivityTaskData = ActivityTaskOptions | MonsterActivityTaskOptions | CollectingOptions;
