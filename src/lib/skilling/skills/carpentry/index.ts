import { Emoji } from '../../../constants';
import { SkillsEnum } from '../../types';
import carpentryItems from './craftables';

const Blacksmithing = {
	aliases: ['carpentry'],
	carpentryItems,
	id: SkillsEnum.Carpentry,
	emoji: Emoji.Carpentry,
	name: 'Carpentry'
};

export default Blacksmithing;
