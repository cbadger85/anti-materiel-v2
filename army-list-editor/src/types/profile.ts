import { Sectorial } from './army';
import { Rule } from './rule';

interface AddedProfile {
  profileId: string;
  amount: number;
}

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
  addsProfiles: AddedProfile[];
  unitId?: string;
}
