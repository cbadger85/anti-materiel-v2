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
  RelationId,
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

  @Column({ default: false })
  isLieutenant?: boolean;

  @ManyToMany(type => Rule, { eager: true, cascade: true })
  @JoinTable()
  specialRules: Rule[];

  @ManyToMany(type => Rule, { eager: true, cascade: true })
  @JoinTable()
  equipment: Rule[];

  @ManyToMany(type => Weapon, { cascade: true })
  @JoinTable()
  bsw: Weapon[];

  @RelationId((profile: Profile) => profile.bsw)
  bswIds: string[];

  @ManyToMany(type => Weapon, { cascade: true })
  @JoinTable()
  ccw: Weapon[];

  @RelationId((profile: Profile) => profile.ccw)
  ccwIds: string[];

  @ManyToMany(type => Weapon, { cascade: true })
  @JoinTable()
  misc: Weapon[];

  @RelationId((profile: Profile) => profile.misc)
  miscIds: string[];

  @Column('simple-array')
  sectorials: Sectorial[];

  @ManyToMany(type => InfoWarAttack, { cascade: true })
  @JoinTable()
  InfoWarAttacks: InfoWarAttack[];

  @RelationId((profile: Profile) => profile.InfoWarAttacks)
  infoWarAttackIds: string[];

  @ManyToMany(type => Profile, { cascade: true })
  @JoinTable()
  addsProfiles: Profile[];

  @RelationId((profile: Profile) => profile.addsProfiles)
  addsProfileIds: string[];

  @ManyToOne(
    type => Unit,
    unit => unit.profiles,
    { nullable: true },
  )
  unit: Unit;

  @Column({ nullable: true })
  unitId?: string;

  @ManyToOne(
    type => Entry,
    entry => entry.profiles,
    { nullable: true },
  )
  entries: Entry[];
}

export default Profile;
