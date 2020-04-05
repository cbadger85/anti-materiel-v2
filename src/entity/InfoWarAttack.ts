import Ammo from './Ammo';
import BaseRule from './BaseRule';
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity()
class InfoWarAttack extends BaseRule {
  @Column()
  attackType: InfoWarAttackType;

  @Column()
  category: InfoWarAttackCategory;

  @Column()
  attackModifier: string;

  @Column()
  oponentModifer: string;

  @Column()
  damage: string;

  @Column()
  burst: string;

  @OneToOne(type => Ammo, { nullable: true, eager: true })
  @JoinColumn()
  ammo: Ammo;

  @Column()
  target: InfoWarAttackTarget;

  @Column()
  skillType: SkillType;

  @Column({ nullable: true })
  special?: string;
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
