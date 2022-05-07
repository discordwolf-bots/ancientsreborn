import { Production } from '../../../types';
import Arrowheads from './arrowheads';
import Ingots from './ingots';
import Orb from './orbs';
import Studs from './studs';

export const Smeltables: Production[] = [...Arrowheads, ...Ingots, ...Orb, ...Studs];
