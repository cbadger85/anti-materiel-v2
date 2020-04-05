class WeaponRangeBand {
  id: string;
  min: string;
  max: string;
  modifier: RangeBandModifier;
}

export default WeaponRangeBand;

export type RangeBandModifier = '+6' | '+3' | '0' | '-3' | '-6';
