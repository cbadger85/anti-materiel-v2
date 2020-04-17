import { Rule, BaseRule } from './rule';

export interface WeaponRangeBand {
  min: string;
  max: string;
  modifier: RangeBandModifier;
  type: RangeBandType;
}

export default WeaponRangeBand;

const rangeBandModifiers = ['+6', '+3', '0', '-3', '-6'] as const;

export type RangeBandModifier = typeof rangeBandModifiers[number];

export enum RangeBandType {
  SHORT = 'SHORT',
  MEDIUM = 'MEDIUM',
  LONG = 'LONG',
  MAXIMUM = 'MAXIMUM',
}

export interface Ammo extends BaseRule {
  combinedAmmo: Ammo[];
}

export interface WeaponMode {
  id: string;
  name: string;
  weaponRangeBands: WeaponRangeBand[];
  damage: string;
  burst: string;
  ammo: Ammo[];
  traits: Rule[];
}

export interface Weapon extends BaseRule {
  weaponModes: WeaponMode[];
}
