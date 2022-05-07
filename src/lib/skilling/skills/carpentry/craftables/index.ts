import { Production } from '../../../types';
import Arrowshafts from './arrowshafts';
import Bowframe from './bowframe';
import Staff from './staff';

export const Craftables: Production[] = [...Arrowshafts, ...Bowframe, ...Staff];
