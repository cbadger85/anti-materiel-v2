import Rule from './Rule';
import Ammo from './Ammo';
import WeaponRange from './WeaponRange';

class WeaponMode {
  id: string;
  name: string;
  weaponRange?: WeaponRange;
  damage: string;
  burst: string;
  ammo: Ammo[];
  traits: Rule[];
}

export default WeaponMode;
