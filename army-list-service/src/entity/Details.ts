import { Sectorial } from './Sectorial';
import Rule from './Rule';
import {
  Column,
  ManyToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  Entity,
} from 'typeorm';

@Entity()
class Details {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  isc?: string;

  @Column()
  classification: Classification;

  @Column()
  name: string;

  @Column({ nullable: true })
  unitType?: UnitType;

  @Column()
  orderType: OrderType;

  @Column({ default: false })
  hackable?: boolean;

  @Column({ nullable: true })
  impetuous?: Impetuous;

  @Column({ nullable: true })
  cube?: Cube;

  @Column()
  mov: string;

  @Column()
  cc: string;

  @Column()
  bs: string;

  @Column()
  ph: string;

  @Column()
  wip: string;

  @Column()
  arm: string;

  @Column()
  bts: string;

  @Column()
  w: string;

  @Column({ default: false })
  structure?: boolean;

  @Column()
  s: string;

  @Column('simple-json')
  ava: Availability[];

  @ManyToMany(type => Rule, { eager: true, cascade: true })
  @JoinTable()
  skills: Rule[];

  @ManyToMany(type => Rule, { eager: true, cascade: true })
  @JoinTable()
  equipment: Rule[];

  @Column()
  image?: string;
}

interface Availability {
  sectorial: Sectorial;
  limit?: number;
}

export default Details;

export enum Cube {
  CUBE = 'CUBE',
  CUBE_V2 = 'CUBE_V2',
}

export enum OrderType {
  REGULAR = 'REGULAR',
  IRREGULAR = 'IRREGULAR',
}

export enum Impetuous {
  FRENZY = 'FRENZY',
  IMPETUOUS = 'IMPETUOUS',
  EXTREMELY_IMPETUOUS = 'EXTREMELY_IMPETUOUS',
}

export type UnitType = 'LI' | 'MI' | 'HI' | 'REM' | 'SK' | 'WB' | 'TAG';

export type Classification =
  | 'Line Troops'
  | 'Veteran Troops'
  | 'Garrison Troops'
  | 'Mechanized Troops'
  | 'Elite Troops'
  | 'Headquarters Troops'
  | 'Spec. Trained Troops'
  | 'Support Troops'
  | 'Character'
  | 'Mercanary Troops';
