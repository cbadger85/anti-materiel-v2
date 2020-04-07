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
  RelationId,
} from 'typeorm';

@Entity()
class Entry {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  isc?: string;

  @Column()
  name: string;

  @Column('simple-array')
  sectorials: Sectorial[];

  @OneToOne(type => Unit, { cascade: true })
  @JoinColumn()
  primaryUnit: Unit;

  @Column()
  primaryUnitId: string;

  @ManyToMany(type => Unit, { cascade: true })
  @JoinTable()
  secondaryUnits: Unit[];

  @RelationId((entry: Entry) => entry.secondaryUnits)
  secondaryUnitIds: string[];

  // image: string;

  @OneToMany(
    type => Profile,
    profile => profile.entries,
    { eager: true, cascade: true },
  )
  profiles: Profile[];
}

export default Entry;
