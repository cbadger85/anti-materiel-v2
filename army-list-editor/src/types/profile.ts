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
  skills: Rule[];
  equipment: Rule[];
  bswIds: string[];
  ccwIds: string[];
  miscIds: string[];
  sectorials: Sectorial[];
  infoWarIds: string[];
  addsProfiles: AddedProfile[];
}

export interface ProfileStore {
  id: string;
  name: string;
  cost: number;
  swc: number;
  isLieutenant?: boolean;
  skillIds: string[];
  equipmentIds: string[];
  bswIds: string[];
  ccwIds: string[];
  miscIds: string[];
  sectorials: Sectorial[];
  infoWarIds: string[];
  addsProfiles: AddedProfile[];
}
