import { Rule } from './rule';
import { Sectorial } from './army';
import { Profile, ProfileStore } from './profile';

export interface Availability {
  sectorial: Sectorial;
  limit?: number;
}

export interface SecondaryImage {
  imageName: string;
  sectorial: Sectorial;
}

export interface Details {
  isc?: string;
  imageName: string;
  secondaryImages: SecondaryImage[];
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
}

export interface DetailsStore {
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
  skillsIds: string[];
  equipmentIds: string[];
  imageName: string;
  secondaryImages: SecondaryImage[];
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
  subUnits: Unit[];
  isProfilesSelectable?: boolean;
  profiles: Profile[];
}

export interface UnitStore {
  id: string;
  primary?: boolean;
  primaryDetails: DetailsStore;
  secondaryDetails?: DetailsStore;
  subUnits: UnitStore[];
  isProfilesSelectable?: boolean;
  profiles: ProfileStore[];
}
