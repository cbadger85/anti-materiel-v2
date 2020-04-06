import Details from './Details';
import Profile from './Profile';
import {
  OneToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable,
  ManyToMany,
  Entity,
} from 'typeorm';

@Entity()
class Unit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(type => Details, { eager: true, cascade: true })
  @JoinColumn()
  primaryDetails: Details;

  @OneToOne(type => Details, { nullable: true, eager: true, cascade: true })
  @JoinColumn()
  secondaryDetails?: Details;

  @ManyToMany(type => Unit, { eager: true, cascade: true })
  @JoinTable()
  additionalUnits: Unit[];

  @Column()
  isProfilesSelectable?: boolean;

  @OneToMany(
    type => Profile,
    profile => profile.unit,
    { cascade: true, eager: true },
  )
  @JoinTable()
  profiles: Profile[];

  @Column('simple-array')
  notes: string[];
}

export default Unit;
