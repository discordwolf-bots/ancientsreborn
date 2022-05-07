import { Emoji } from '../../../constants';
import { SkillsEnum } from '../../types';
import { Smeltables } from './craftables/index';

const Metallurgy = {
	aliases: ['metallurgy'],
	Smeltables,
	id: SkillsEnum.Metallurgy,
	emoji: Emoji.Metallurgy,
	name: 'Metallurgy'
};

export default Metallurgy;
