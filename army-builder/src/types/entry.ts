import { Sectorial } from './sectorial';
import { Unit } from './unit';
import { Profile } from './profile';

export interface Entry {
  id: string;
  isc?: string;
  name: string;
  sectorials: Sectorial[];
  primaryUnit: Unit;
  secondaryUnits: Unit[];
  profiles: Profile[];
}

export interface EntryResponse {
  id: string;
  isc?: string;
  name: string;
  sectorials: Sectorial[];
  primaryUnitId: string;
  secondaryUnitIds: string[];
  profiles: Profile[];
}
