import { Sectorial } from './Sectorial';
import Rule from './Rule';

class Details {
  id: string;
  isc: string;
  classification: string;
  name: string;
  unitType: UnitType;
  orderType: OrderType;
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
  ava: [Sectorial, number][];
  skills: Rule[];
  equipment: Rule[];
  notes?: string[];
  // image: string;
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
  | 'Line Troop'
  | 'Veteran Troop'
  | 'Garrison Troop'
  | 'Mechanized Troop'
  | 'Elite Troop'
  | 'Headquarters Troop'
  | 'Spec. Trained Troop'
  | 'Support Troop'
  | 'Character'
  | 'Mercanary Troop';
