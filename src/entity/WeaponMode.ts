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
  @JoinTable()
  weaponRangeBands?: WeaponRangeBand[];

  @Column()
  damage: string;

  @Column()
  burst: string;

  @ManyToMany(type => Ammo, { eager: true, cascade: true })
  @JoinColumn()
  ammo: Ammo[];

  @ManyToMany(type => Ammo, { eager: true, cascade: true })
  @JoinColumn()
  traits: Rule[];

  @ManyToOne(
    type => Weapon,
    weapon => weapon.weaponModes,
  )
  weapon: Weapon;
}

export default WeaponMode;
