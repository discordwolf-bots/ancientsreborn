import { Emoji } from '../../../constants';
import { SkillsEnum } from '../../types';
import { Craftables } from './craftables';

const Blacksmithing = {
	aliases: ['carpentry'],
	Craftables,
	id: SkillsEnum.Carpentry,
	emoji: Emoji.Carpentry,
	name: 'Carpentry'
};

export default Blacksmithing;
