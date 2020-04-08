import { Rule, BaseRule } from './rule';

export interface WeaponRangeBand {
  id: string;
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

export interface AmmoResponse extends BaseRule {
  combinedAmmoIds: string[];
}

export interface WeaponResponse extends BaseRule {
  weaponModes: WeaponModeResponse[];
}

interface WeaponModeResponse {
  id: string;
  name: string;
  weaponRangeBands: [];
  damage: string;
  burst: string;
  ammoIds: string[];
  traits: Rule[];
}
