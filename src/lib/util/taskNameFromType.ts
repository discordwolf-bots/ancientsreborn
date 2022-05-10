import { Tasks } from '../constants';
import { activity_type_enum } from '.prisma/client';

export function taskNameFromType(activityType: activity_type_enum): Tasks {
	switch (activityType) {
		case 'MonsterKilling':
			return Tasks.MonsterActivity;
		case 'GroupMonsterKilling':
			return Tasks.GroupMonsterActivity;
		case 'Questing':
			return Tasks.QuestingActivity;
		case 'Mining':
		case 'Fishing':
		case 'Woodcutting':
		case 'Gathering':
			return Tasks.GatheringActivity;
		case 'Metallurgy':
		case 'Blacksmithing':
		case 'Cooking':
		case 'Carpentry':
		case 'Fletching':
		case 'Weaving':
		case 'Tailoring':
			return Tasks.ProductionActivity;
	}
}
