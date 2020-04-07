import { plainToClass } from 'class-transformer';
import { Service } from 'typedi';
import Rule from '../entity/Rule';
import RuleRequest from '../model/RuleRequest';
import RuleRepository from '../repository/RuleRepository';

@Service()
class RuleService {
  constructor(private ruleRepository: RuleRepository) {}

  getRule = async (id: string): Promise<Rule | undefined> =>
    await this.ruleRepository.findById(id);

  getAllRules = async (): Promise<Rule[]> =>
    await this.ruleRepository.findAll();

  createRule = async (request: RuleRequest): Promise<Rule> =>
    await this.ruleRepository.save(plainToClass(Rule, { ...request }));
}

export default RuleService;
