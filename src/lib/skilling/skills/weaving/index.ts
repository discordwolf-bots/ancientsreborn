import { Emoji } from '../../../constants';
import { SkillsEnum } from '../../types';
import weavingItems from './craftables';

const Weaving = {
	aliases: ['weaving'],
	weavingItems,
	id: SkillsEnum.Weaving,
	emoji: Emoji.Weaving,
	name: 'Weaving'
};

export default Weaving;
