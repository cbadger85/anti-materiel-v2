import { Column, PrimaryGeneratedColumn } from 'typeorm';

abstract class BaseRule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  link?: string;

  @Column()
  name: string;
}

export default BaseRule;
