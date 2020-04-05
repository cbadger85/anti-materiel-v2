import { Sectorial } from './Sectorial';
import Rule from './Rule';
import Weapon from './Weapon';
import InfoWarAttack from './InfoWarAttack';
import Unit from './Unit';
import {
  ManyToOne,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  Column,
  Entity,
} from 'typeorm';
import Entry from './Entry';

@Entity()
class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cost: number;

  @Column()
  swc: number;

  @ManyToMany(type => Rule, { eager: true, cascade: true })
  @JoinTable()
  specialRules: Rule[];

  @ManyToMany(type => Rule, { eager: true, cascade: true })
  @JoinTable()
  equipment: Rule[];

  @ManyToMany(type => Weapon, { eager: true, cascade: true })
  @JoinTable()
  bsw: Weapon[];

  @ManyToMany(type => Weapon, { eager: true, cascade: true })
  @JoinTable()
  ccw: Weapon[];

  @ManyToMany(type => Weapon, { eager: true, cascade: true })
  @JoinTable()
  misc: Weapon[];

  @Column('simple-array')
  sectorial: Sectorial[];

  @ManyToMany(type => InfoWarAttack, { eager: true, cascade: true })
  @JoinTable()
  InfoWareAttacks: InfoWarAttack[];

  @ManyToMany(type => Unit, { eager: true, cascade: true })
  @JoinTable()
  addedUnits: Unit[];

  @ManyToOne(
    type => Unit,
    unit => unit.profiles,
    { nullable: true },
  )
  units: Unit[];

  @ManyToOne(
    type => Entry,
    entry => entry.profiles,
    { nullable: true },
  )
  entries: Entry[];
}

export default Profile;
