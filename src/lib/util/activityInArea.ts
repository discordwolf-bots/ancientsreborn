import { Monsters } from 'oldschooljs';

import { ActivityTaskOptions, MonsterActivityTaskOptions } from '../types/minions';

export const enum WorldLocations {
	Priffdinas,
	World
}

const WorldLocationsChecker = [
	{
		area: WorldLocations.Priffdinas,
		checker: (activity: ActivityTaskOptions) => {
			if (['Gauntlet', 'Zalcano'].includes(activity.type)) return true;
			if (
				activity.type === 'MonsterKilling' &&
				[Monsters.DarkBeast.id, Monsters.PrifddinasElf.id].includes(
					(activity as MonsterActivityTaskOptions).monsterID
				)
			) {
				return true;
			}

			return false;
		}
	}
];

export default function activityInArea(activity: ActivityTaskOptions) {
	for (const checkLocation of WorldLocationsChecker) {
		if (checkLocation.checker(activity)) return checkLocation.area;
	}
	return WorldLocations.World;
}
