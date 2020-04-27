import { Sectorial } from './army';
import { Unit, UnitStore } from './unit';
import { Profile, ProfileStore } from './profile';
import { EntryValidation } from './validationRules';

export interface EntryNote {
  id: string;
  text: string;
  sectorials: Sectorial[];
}

export interface Entry {
  id: string;
  isc?: string;
  name: string;
  sectorials: Sectorial[];
  primaryUnit: Unit;
  secondaryUnits: Unit[];
  profiles: Profile[];
  notes: EntryNote[];
  validation: EntryValidation[];
}

export interface EntryStore {
  id: string;
  isc?: string;
  name: string;
  sectorials: Sectorial[];
  units: UnitStore[];
  profiles: ProfileStore[];
  notes: EntryNote[];
  validation: EntryValidation[];
}
