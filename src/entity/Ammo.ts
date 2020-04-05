import { JoinColumn, OneToOne, Entity } from 'typeorm';
import BaseRule from './BaseRule';

@Entity()
class Ammo extends BaseRule {
  id: string;

  @OneToOne(type => Ammo, { nullable: true, eager: true })
  @JoinColumn()
  combinedAmmo?: Ammo;
}
export default Ammo;
