import { Production } from '../../../types';
import Arrowheads from './arrowheads';
import Ingots from './ingots';
import Orb from './orbs';
import Studs from './studs';

const metallurgyItems: Production[] = [...Arrowheads, ...Ingots, ...Orb, ...Studs];

export default metallurgyItems;
