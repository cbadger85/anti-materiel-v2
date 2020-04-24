import { Sectorial } from './army';
import { Unit, UnitStore } from './unit';
import { Profile, ProfileStore } from './profile';

export interface EntryNotes {
  text: string[];
  sectorial: Sectorial;
}

export interface Entry {
  id: string;
  isc?: string;
  name: string;
  sectorials: Sectorial[];
  primaryUnit: Unit;
  secondaryUnits: Unit[];
  profiles: Profile[];
  notes: EntryNotes[];
}

export interface EntryStore {
  id: string;
  isc?: string;
  name: string;
  sectorials: Sectorial[];
  units: UnitStore[];
  profiles: ProfileStore[];
  notes: EntryNotes[];
}
