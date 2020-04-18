import { Rule } from './rule';
import { Sectorial } from './army';
import { Profile } from './profile';

export interface Availability {
  sectorial: Sectorial;
  limit?: number;
}

export interface Details {
  id: string;
  isc?: string;
  classification: Classification;
  name: string;
  unitType?: UnitType;
  orderType?: OrderType;
  hackable?: boolean;
  impetuous?: Impetuous;
  cube?: Cube;
  mov: string;
  cc: string;
  bs: string;
  ph: string;
  wip: string;
  arm: string;
  bts: string;
  w: string;
  structure?: boolean;
  s: string;
  ava: Availability[];
  skills: Rule[];
  equipment: Rule[];
  image: string;
}

export const classifications = [
  'Line Troops',
  'Veteran Troops',
  'Garrison Troops',
  'Mechanized Troops',
  'Elite Troops',
  'Headquarters Troops',
  'Spec. Trained Troops',
  'Support Troops',
  'Character',
  'Mercenary Troops',
] as const;

export type Classification = typeof classifications[number];

export const unitTypes = ['LI', 'MI', 'HI', 'REM', 'SK', 'WB', 'TAG'] as const;

export type UnitType = typeof unitTypes[number];

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

export interface Unit {
  id: string;
  primaryDetails: Details;
  secondaryDetails?: Details;
  additionalUnits: Unit[];
  isProfilesSelectable?: boolean;
  profiles: Profile[];
  notes: string[];
}

export interface UnitResponse {
  id: string;
  primaryDetails: Details;
  secondaryDetails?: Details;
  additionalUnitIds: string[];
  isProfilesSelectable?: boolean;
  profiles: Profile[];
  notes: string[];
}
