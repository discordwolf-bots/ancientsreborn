import { Emoji } from '../../constants';
import itemID from '../../util/itemID';
import { Herb, SkillsEnum } from '../types';

const Herbs: Herb[] = [
	{
		level: 1,
		xp: 20,
		id: itemID('Cotton'),
		name: 'Cotton',
		cbRequired: 1
	},
	{
		level: 5,
		xp: 40,
		id: itemID('Moonleaf'),
		name: 'Moonleaf',
		cbRequired: 1
	},
	{
		level: 10,
		xp: 60,
		id: itemID('Tanglestrand'),
		name: 'Tanglestrand',
		cbRequired: 1
	},
	{
		level: 20,
		xp: 80,
		id: itemID('Duneswelt'),
		name: 'Duneswelt',
		cbRequired: 1
	},
	{
		level: 30,
		xp: 100,
		id: itemID('Mossvine'),
		name: 'Mossvine',
		cbRequired: 1
	},
	{
		level: 40,
		xp: 130,
		id: itemID('Rockleaf'),
		name: 'Rockleaf',
		cbRequired: 1
	},
	{
		level: 60,
		xp: 200,
		id: itemID('Frostrand'),
		name: 'Frostrand',
		cbRequired: 1
	},
	{
		level: 80,
		xp: 300,
		id: itemID('Flameweed'),
		name: 'Flameweed',
		cbRequired: 1
	}
];

const Gathering = {
	aliases: ['gather', 'gathering'],
	Herbs,
	id: SkillsEnum.Gathering,
	emoji: Emoji.Gathering,
	name: 'Gathering'
};

export default Gathering;
