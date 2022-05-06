import { Emoji } from '../../constants';
import itemID from '../../util/itemID';
import { Log, SkillsEnum } from '../types';

const Logs: Log[] = [
	{
		level: 1,
		xp: 5,
		id: itemID('Farwood Log'),
		name: 'Farwood',
		cbRequired: 1
	},
	{
		level: 10,
		xp: 10,
		id: itemID('Gnarlwood Log'),
		name: 'Gnarwood',
		cbRequired: 1
	},
	{
		level: 20,
		xp: 15,
		id: itemID('Sandwood Log'),
		name: 'Sandwood',
		cbRequired: 1
	},
	{
		level: 40,
		xp: 25,
		id: itemID('Hillpine Log'),
		name: 'Hillpine',
		cbRequired: 1
	},
	{
		level: 50,
		xp: 30,
		id: itemID('Ashenwood Log'),
		name: 'Ashenwood',
		cbRequired: 1
	},
	{
		level: 60,
		xp: 35,
		id: itemID('Frostscarred Log'),
		name: 'Frostscarred',
		cbRequired: 1
	},
	{
		level: 80,
		xp: 80,
		id: itemID('Devilsbark Log'),
		name: 'Devilsbark',
		cbRequired: 1
	}
];

const Woodcutting = {
	aliases: ['wc', 'woodcut', 'woodcutting'],
	Logs,
	id: SkillsEnum.Woodcutting,
	emoji: Emoji.Woodcutting,
	name: 'Woodcutting'
};

export default Woodcutting;
