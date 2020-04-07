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
  RelationId,
} from 'typeorm';
import { Type } from 'class-transformer';

@Entity()
class Unit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(type => Details, { eager: true, cascade: true })
  @JoinColumn()
  @Type(type => Details)
  primaryDetails: Details;

  @OneToOne(type => Details, { nullable: true, eager: true, cascade: true })
  @JoinColumn()
  @Type(type => Details)
  secondaryDetails?: Details;

  @ManyToMany(type => Unit, { cascade: true })
  @JoinTable()
  additionalUnits: Unit[];

  @RelationId((unit: Unit) => unit.additionalUnits)
  additionalUnitIds: string[];

  @Column({ default: true })
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
