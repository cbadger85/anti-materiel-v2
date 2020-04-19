import { BaseRule } from './rule';
import { Ammo } from './weapon';

export interface InfoWarAttack extends BaseRule {
  attackType: InfoWarAttackType;
  category: InfoWarAttackCategory;
  range?: InfoWarAttackRange;
  target: InfoWarAttackTarget[];
  skillType: SkillType[];
  attackModifier?: string;
  opponentModifier?: string;
  damage?: string;
  burst?: string;
  ammo: Ammo[];
  effect?: string;
  special?: string;
}

export type InfoWarAttackStore = Omit<InfoWarAttack, 'ammo'> & {
  ammoIds: string[];
};

export enum InfoWarAttackType {
  HACKING_PROGRAM = 'HACKING_PROGRAM',
  PHEROWARE_TACTIC = 'PHEROWARE_TACTIC',
}

export const infoWarAttackCategories = [
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

export type InfoWarAttackCategory = typeof infoWarAttackCategories[number];

export const infoWarAttackTargets = [
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

export type InfoWarAttackTarget = typeof infoWarAttackTargets[number];

export const infoWarAttackRange = [
  'Hacking Area',
  'Table',
  'User',
  'Base Contact',
  'ZoC',
] as const;

export type InfoWarAttackRange = typeof infoWarAttackRange[number];

export const skillType = [
  'Short Skill',
  'ARO',
  'Automatic Skill',
  'Entire Order',
] as const;

export type SkillType = typeof skillType[number];
