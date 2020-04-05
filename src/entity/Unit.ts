import Details from './Details';
import Profile from './Profile';

class Unit {
  id: string;
  primaryDetails: Details;
  secondaryDetails?: Details;
  additionalUnits: Unit[];
  isProfilesSelectable?: boolean;
  profiles: Profile[];
  notes: string[];
}

export default Unit;
