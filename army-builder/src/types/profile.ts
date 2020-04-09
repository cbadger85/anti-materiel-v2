import { Sectorial } from './army';
import { Rule } from './rule';

export interface Profile {
  id: string;
  name: string;
  cost: number;
  swc: number;
  isLieutenant?: boolean;
  specialRules: Rule[];
  equipment: Rule[];
  bswIds: string[];
  ccwIds: string[];
  miscIds: string[];
  sectorials: Sectorial[];
  infoWarAttackIds: string[];
  addsProfileIds: string[];
  unitId?: string;
}
