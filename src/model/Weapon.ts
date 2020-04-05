import Rule from './Rule';
import WeaponMode from './WeaponMode';

class Weapon extends Rule {
  id: string;
  weaponModes: WeaponMode[];
}

export default Weapon;
