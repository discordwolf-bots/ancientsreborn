import { ActivityGroup } from '../constants';
import { activity_type_enum } from '.prisma/client';

export function taskGroupFromActivity(type: activity_type_enum): ActivityGroup {
	switch (type) {
		case 'MonsterKilling':
		case 'GroupMonsterKilling':
			return ActivityGroup.Monster;
		case 'Questing':
		case 'Mining':
		case 'Fishing':
		case 'Woodcutting':
		case 'Gathering':
		case 'Metallurgy':
		case 'Blacksmithing':
		case 'Cooking':
		case 'Carpentry':
		case 'Fletching':
		case 'Weaving':
		case 'Tailoring':
			return ActivityGroup.Skilling;
		default:
			return ActivityGroup.Skilling;
	}
}
