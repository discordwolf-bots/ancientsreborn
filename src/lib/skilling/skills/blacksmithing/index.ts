import { Emoji } from '../../../constants';
import { SkillsEnum } from '../../types';
import { Armour } from './armour/index';
import { Weapons } from './weapons/index';

const Blacksmithing = {
	aliases: ['blacksmithing', 'bs', 'smithing'],
	blacksmithingItems: [...Armour, ...Weapons],
	id: SkillsEnum.Blacksmithing,
	emoji: Emoji.Blacksmithing,
	name: 'Blacksmithing'
};

export default Blacksmithing;
