import { Sectorial } from './Sectorial';
import Unit from './Unit';
import Profile from './Profile';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

@Entity()
class Entry {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  isc: string;

  @Column()
  name: string;

  @Column('simple-array')
  sectorials: Sectorial[];

  @OneToOne(type => Unit, { eager: true, cascade: true })
  @JoinColumn()
  primaryUnit: Unit;

  @ManyToMany(type => Unit, { eager: true, cascade: true })
  @JoinTable()
  secondaryUnits: Unit[];
  // image: string;
  @OneToMany(
    type => Profile,
    profile => profile.entries,
    { eager: true, cascade: true },
  )
  profiles: Profile[];
}

export default Entry;
