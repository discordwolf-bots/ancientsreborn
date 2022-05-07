import { Production } from '../../../types';
import Belt from './belt';
import Boots from './boots';
import Gloves from './gloves';
import Helmet from './helmet';
import Pants from './pants';
import Tunic from './tunic';

export const Studded: Production[] = [...Belt, ...Boots, ...Gloves, ...Helmet, ...Pants, ...Tunic];
