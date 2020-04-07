import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
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
    { nullable: true, eager: true, cascade: true },
  )
  weaponRangeBands?: WeaponRangeBand[];

  @Column()
  damage: string;

  @Column()
  burst: string;

  @ManyToMany(type => Ammo, { cascade: true })
  @JoinTable()
  ammo: Ammo[];

  @RelationId((mode: WeaponMode) => mode.ammo)
  ammoIds: string[];

  @ManyToMany(type => Rule, { eager: true, cascade: true, nullable: true })
  @JoinTable()
  traits?: Rule[];

  @ManyToOne(
    type => Weapon,
    weapon => weapon.weaponModes,
  )
  weapon: Weapon;
}

export default WeaponMode;
