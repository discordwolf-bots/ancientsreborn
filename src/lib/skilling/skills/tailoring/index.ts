import { Emoji } from '../../../constants';
import { SkillsEnum } from '../../types';
import { Lined } from './lined';
import { Studded } from './studded';

const Tailoring = {
	aliases: ['tailoring', 'tailor'],
	tailoringItems: [...Lined, ...Studded],
	id: SkillsEnum.Tailoring,
	emoji: Emoji.Tailoring,
	name: 'Tailoring'
};

export default Tailoring;
