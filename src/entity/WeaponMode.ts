import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Ammo from './Ammo';
import Rule from './Rule';
import Weapon from './Weapon';
import WeaponRangeBand from './WeaponRangeBand';

@Entity()
class WeaponMode {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(
    type => WeaponRangeBand,
    weaponRangeBand => weaponRangeBand.weaponMode,
    { nullable: true, eager: true },
  )
  weaponRangeBands?: WeaponRangeBand[];

  @Column()
  damage: string;

  @Column()
  burst: string;

  @ManyToMany(type => Ammo, { eager: true, cascade: true })
  @JoinTable()
  ammo: Ammo[];

  @ManyToMany(type => Rule, { eager: true, cascade: true })
  @JoinTable()
  traits: Rule[];

  @ManyToOne(
    type => Weapon,
    weapon => weapon.weaponModes,
  )
  weapon: Weapon;
}

export default WeaponMode;
