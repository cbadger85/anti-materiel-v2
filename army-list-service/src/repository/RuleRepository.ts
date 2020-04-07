import { Service } from 'typedi';
import Rule from '../entity/Rule';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

@Service()
class RuleRepository {
  constructor(@InjectRepository(Rule) private repository: Repository<Rule>) {}

  findAll = (): Promise<Rule[]> => this.repository.find();

  findById = (id: string): Promise<Rule | undefined> =>
    this.repository.findOne(id);

  findByIds = (ids: string[]): Promise<Rule[]> =>
    this.repository.findByIds(ids);

  save = (rule: Rule): Promise<Rule> => this.repository.save(rule);
}

export default RuleRepository;
