import { BaseRule } from './rule';
import { Ammo } from './weapon';

export interface InfoWar extends BaseRule {
  attackType: InfoWarType;
  category: InfoWarCategory;
  range?: InfoWarRange;
  target: InfoWarTarget[];
  skillType: SkillType[];
  attackModifier?: string;
  opponentModifier?: string;
  damage?: string;
  burst?: string;
  ammo: Ammo[];
  effect?: string;
  special?: string;
}

export type InfoWarStore = Omit<InfoWar, 'ammo'> & {
  ammoIds: string[];
};

export enum InfoWarType {
  HACKING_PROGRAM = 'HACKING_PROGRAM',
  PHEROWARE_TACTIC = 'PHEROWARE_TACTIC',
}

export const infoWarCategories = [
  'Attack',
  'Support',
  'CLAW-1',
  'CLAW-2',
  'CLAW-3',
  'SWORD-1',
  'SWORD-2',
  'SHIELD-1',
  'SHIELD-2',
  'SHIELD-3',
  'GADGET-1',
  'GADGET-2',
  'GADGET-EVO',
  'UPGRADE',
] as const;

export type InfoWarCategory = typeof infoWarCategories[number];

export const infoWarTargets = [
  'Trooper possessing Wounds Attribute.',
  'Trooper with Symbiont Armor in Unconscious state.',
  'User in active Symbiont Armor state',
  'Comms Equipment',
  'TAG',
  'HI',
  'REM',
  'Hacker',
  'Manned TAG',
  'Possessed TAG',
  'Guided Spec. Ammo',
  'REMs with Repeater',
  'Fireteams',
  'Fireteam member',
  'Remote Presence in Unconscious State',
  '--',
] as const;

export type InfoWarTarget = typeof infoWarTargets[number];

export const infoWarRange = [
  'Hacking Area',
  'Table',
  'User',
  'Base Contact',
  'ZoC',
] as const;

export type InfoWarRange = typeof infoWarRange[number];

export const skillType = [
  'Short Skill',
  'ARO',
  'Automatic Skill',
  'Entire Order',
] as const;

export type SkillType = typeof skillType[number];
