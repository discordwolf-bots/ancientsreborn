import { Emoji } from '../../../constants';
import { SkillsEnum } from '../../types';
import metallurgyItems from './craftables/index';

const Metallurgy = {
	aliases: ['metallurgy'],
	metallurgyItems,
	id: SkillsEnum.Metallurgy,
	emoji: Emoji.Metallurgy,
	name: 'Metallurgy'
};

export default Metallurgy;
