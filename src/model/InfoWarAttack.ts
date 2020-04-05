import Ammo from './Ammo';

class InfoWarAttack {
  id: string;
  attackType: InfoWarAttackType;
  category: InfoWarAttackCategory;
  attackModifier: string;
  oponentModifer: string;
  damage: string;
  burst: string;
  ammo: Ammo;
  target: InfoWarAttackTarget;
  skillType: SkillType;
  special: string;
}

export default InfoWarAttack;

export enum InfoWarAttackType {
  HACKING_PROGRAM = 'HACKING_PROGRAM',
  PHEROWARE_TACTIC = 'PHEROWARE_TACTIC',
}

export type InfoWarAttackCategory =
  | 'Attack'
  | 'Support'
  | 'CLAW-1'
  | 'CLAW-2'
  | 'CLAW-3'
  | 'SWORD-1'
  | 'SWORD-2'
  | 'SHIELD-1'
  | 'SHIELD-2'
  | 'SHIELD-3'
  | 'GADGET-1'
  | 'GADGET-2'
  | 'GADGET-EVO'
  | 'UPGRADE';

export type InfoWarAttackTarget =
  | 'Trooper possessing Wounds Attribute.'
  | 'Trooper with Symbiont Armor in Unconscious state.'
  | 'User in active Symbiont Armor state'
  | 'Comms Equipment'
  | 'TAG'
  | 'HI'
  | 'REM'
  | 'Hacker'
  | 'Manned TAG'
  | 'Possessed TAG'
  | 'Guided Spec. Ammo'
  | 'REMs with Repeater'
  | 'Fireteams'
  | 'Fireteam member'
  | 'Remote Presence in Unconscious State'
  | '--';

export type InfoWareAttackRange =
  | 'Hacking Area'
  | 'Table'
  | 'User'
  | 'Base Contact'
  | 'ZoC';

export type SkillType =
  | 'Short Skill'
  | 'ARO'
  | 'Automatic Skill'
  | 'Entire Order';
