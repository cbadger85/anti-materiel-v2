import { Sectorial } from './army';
import { Unit } from './unit';
import { Profile } from './profile';

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
