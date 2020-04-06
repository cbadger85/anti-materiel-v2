import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import WeaponMode from './WeaponMode';

@Entity()
class WeaponRangeBand {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  min: string;

  @Column()
  max: string;

  @Column()
  modifier: RangeBandModifier;

  @Column()
  type: RangeBandType;

  @ManyToOne(
    type => WeaponMode,
    weaponMode => weaponMode.weaponRangeBands,
  )
  weaponMode: WeaponMode;
}

export default WeaponRangeBand;

export type RangeBandModifier = '+6' | '+3' | '0' | '-3' | '-6';

export enum RangeBandType {
  SHORT = 'SHORT',
  MEDIUM = 'MEDIUM',
  LONG = 'LONG',
  MAXIMUM = 'MAXIMUM',
}
