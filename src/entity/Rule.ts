import { Entity } from 'typeorm';
import BaseRule from './BaseRule';

@Entity()
class Rule extends BaseRule {}

export default Rule;
