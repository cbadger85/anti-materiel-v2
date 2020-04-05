import BaseRule from './BaseRule';
import WeaponMode from './WeaponMode';
import { OneToMany, JoinTable, Entity } from 'typeorm';

@Entity()
class Weapon extends BaseRule {
  @OneToMany(
    type => WeaponMode,
    weaponMode => weaponMode.weapon,
    { cascade: true, eager: true },
  )
  @JoinTable()
  weaponModes: WeaponMode[];
}

export default Weapon;
