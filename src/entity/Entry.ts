import { Sectorial } from './Sectorial';
import Unit from './Unit';
import Profile from './Profile';

class Entry {
  id: string;
  isc: string;
  name: string;
  sectorials: Sectorial[];
  primaryUnit: Unit;
  secondaryUnits: Unit[];
  // image: string;
  profiles: Profile[];
}

export default Entry;
