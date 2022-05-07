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

export interface FishingActivityTaskOptions extends ActivityTaskOptions {
	fishID: number;
	quantity: number;
}

export interface MiningActivityTaskOptions extends ActivityTaskOptions {
	oreID: number;
	quantity: number;
}

export interface WoodcuttingActivityTaskOptions extends ActivityTaskOptions {
	logID: number;
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
