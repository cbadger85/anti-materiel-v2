import { Rule, BaseRule } from './rule';

export interface Ammo extends BaseRule {
  combinedAmmo: Ammo[];
}

export interface AmmoStore extends BaseRule {
  combinedAmmoIds: string[];
}

export interface AmmoFields extends BaseRule {
  combinedAmmo: AmmoStore[];
}

export const weaponRangeBands = [
  '0-8" -3',
  '0-8" 0',
  '0-8" +3',
  '0-8" +6',
  '0-16" 0',
  '8-16" -3',
  '8-16" 0',
  '8-16" +3',
  '8-24" 0',
  '8-24" +3',
  '8-32" 0',
  '16-24" -6',
  '16-24" -3',
  '16-24" +3',
  '16-32" -3',
  '16-32" +3',
  '16-40" -3',
  '16-48" +3',
  '24-32" -6',
  '24-32" -3',
  '24-40" -3',
  '24-40" +3',
  '24-48" -6',
  '24-48" -3',
  '32-48" -6',
  '32-48" -3',
  '32-48" 0',
  '40-48" -6',
  '48-96" -6',
  '48-96" -3',
] as const;

export type WeaponRangeBand = typeof weaponRangeBands[number];

export interface WeaponMode {
  id: string;
  name: string;
  shortRange?: WeaponRangeBand;
  mediumRange?: WeaponRangeBand;
  longRange?: WeaponRangeBand;
  maximumRange?: WeaponRangeBand;
  damage?: string;
  burst: string;
  ammo: Ammo[];
  traits: Rule[];
}

export interface Weapon extends BaseRule {
  modes: WeaponMode[];
}

export interface WeaponModeStore {
  id: string;
  name: string;
  shortRange?: string;
  mediumRange?: string;
  longRange?: string;
  maximumRange?: string;
  damage?: string;
  burst: string;
  ammoIds: string[];
  traitIds: string[];
}

export interface WeaponStore extends BaseRule {
  modes: WeaponModeStore[];
}
