import { Column, Entity, JoinTable, ManyToMany, RelationId } from 'typeorm';
import Ammo from './Ammo';
import BaseRule from './BaseRule';

@Entity()
class InfoWarAttack extends BaseRule {
  @Column()
  attackType: InfoWarAttackType;

  @Column()
  category: InfoWarAttackCategory;

  @Column('simple-array')
  range: InfoWarAttackRange[];

  @Column()
  attackModifier: string;

  @Column()
  opponentModifier: string;

  @Column()
  damage: string;

  @Column()
  burst: string;

  @ManyToMany(type => Ammo, { cascade: true })
  @JoinTable()
  ammo: Ammo[];

  @RelationId((infoWarAttack: InfoWarAttack) => infoWarAttack.ammo)
  ammoIds: string[];

  @Column('simple-array')
  target: InfoWarAttackTarget[];

  @Column('simple-array')
  skillType: SkillType[];

  @Column({ nullable: true })
  special?: string;

  @Column({ nullable: true })
  effect?: string;
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

export type InfoWarAttackRange =
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
