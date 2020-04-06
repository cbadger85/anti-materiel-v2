import { Entity, JoinTable, ManyToMany, RelationId } from 'typeorm';
import BaseRule from './BaseRule';

@Entity()
class Ammo extends BaseRule {
  @ManyToMany(type => Ammo, { cascade: true })
  @JoinTable()
  combinedAmmo: Ammo[];

  @RelationId((ammo: Ammo) => ammo.combinedAmmo)
  combinedAmmoIds: string[];
}
export default Ammo;
