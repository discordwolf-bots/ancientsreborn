import { Emoji } from '../../constants';
import { Skill, SkillsEnum } from '../types';
import Blacksmithing from './blacksmithing';
import Carpentry from './carpentry';
import Cooking from './cooking';
import Fishing from './fishing';
import Fletching from './fletching/index';
import Gathering from './gathering';
import Metallurgy from './metallurgy';
import Mining from './mining';
import Tailoring from './tailoring';
import Weaving from './weaving';
import Woodcutting from './woodcutting';

export const Skills: Record<string, Skill> = {
	Mining,
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
	Strength: {
		aliases: ['strength', 'str'],
		id: SkillsEnum.Strength,
		emoji: Emoji.Strength,
		name: 'Strength'
	},
	Dexterity: {
		aliases: ['dexterity', 'dex'],
		id: SkillsEnum.Dexterity,
		emoji: Emoji.Dexterity,
		name: 'Dexterity'
	},
	Defence: {
		aliases: ['defence', 'def'],
		id: SkillsEnum.Defence,
		emoji: Emoji.Defence,
		name: 'Defence'
	},
	Intellect: {
		aliases: ['intellect', 'intl'],
		id: SkillsEnum.Intellect,
		emoji: Emoji.Intellect,
		name: 'Intellect'
	},
	Vitality: {
		aliases: ['vitality', 'health'],
		id: SkillsEnum.Vitality,
		emoji: Emoji.Vitality,
		name: 'Vitality'
	},
	Piercing: {
		aliases: ['piercing'],
		id: SkillsEnum.Piercing,
		emoji: Emoji.Piercing,
		name: 'Piercing'
	},
	Fencing: {
		aliases: ['fencing'],
		id: SkillsEnum.Fencing,
		emoji: Emoji.Fencing,
		name: 'Fencing'
	},
	HeavyWeapons: {
		aliases: ['heavyweapons', 'heavy'],
		id: SkillsEnum.HeavyWeapons,
		emoji: Emoji.HeavyWeapons,
		name: 'HeavyWeapons'
	},
	MagicStaffs: {
		aliases: ['magicstaffs', 'magic', 'mage'],
		id: SkillsEnum.MagicStaffs,
		emoji: Emoji.MagicStaffs,
		name: 'MagicStaffs'
	},
	RangedWeapons: {
		aliases: ['ranged', 'rng', 'rangedweapons'],
		id: SkillsEnum.RangedWeapons,
		emoji: Emoji.RangedWeapons,
		name: 'RangedWeapons'
	}
};

export const skillsValues = Object.values(Skills);

export default Skills;
