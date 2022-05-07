import { Production } from '../../../types';
import Belt from './belt';
import Boots from './boots';
import Chestpiece from './chest';
import Gloves from './gloves';
import Helmet from './helmet';
import LegGuards from './legguards';

export const Armour: Production[] = [...Belt, ...Boots, ...Chestpiece, ...Gloves, ...Helmet, ...LegGuards];
