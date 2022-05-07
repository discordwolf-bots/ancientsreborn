import { Production } from '../../../types';
import Bowstring from './bowstring';
import Cloth from './cloth';
import Fiber from './fiber';
import Leather from './leather';

const weavingItems: Production[] = [...Bowstring, ...Cloth, ...Fiber, ...Leather];

export default weavingItems;
