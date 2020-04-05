import { Sectorial } from './Sectorial';
import Rule from './Rule';
import Weapon from './Weapon';
import InfoWarAttack from './InfoWarAttack';
import Unit from './Unit';

class Profile {
  id: string;
  name: string;
  cost: number;
  swc: number;
  specialRules: Rule[];
  equipment: Rule[];
  bsw: Weapon[];
  ccw: Weapon[];
  misc: Weapon[];
  sectorial: Sectorial[];
  InfoWareAttacks: InfoWarAttack[];
  addedUnits: Unit[];
}

export default Profile;
