import { Production } from '../../../types';
import Axe from './axe';
import Hammer from './hammer';
import Shield from './shield';
import Sword from './sword';

const Weapons: Production[] = [...Axe, ...Hammer, ...Shield, ...Sword];

export default Weapons;
