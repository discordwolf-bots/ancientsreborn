import { Production } from '../../../types';
import Arrowshafts from './arrowshafts';
import Bowframe from './bowframe';
import Staff from './staff';

const carpentryItems: Production[] = [...Arrowshafts, ...Bowframe, ...Staff];

export default carpentryItems;
