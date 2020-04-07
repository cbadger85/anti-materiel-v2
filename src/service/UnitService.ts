import { Service } from 'typedi';
import UnitRepository from '../repository/UnitRepository';
import RuleRepository from '../repository/RuleRepository';
import WeaponRepository from '../repository/WeaponRepository';
import InfoWarAttackRepository from '../repository/InfoWarAttackRepository';

@Service()
class UnitService {
  constructor(
    private unitRepository: UnitRepository,
    private ruleRepository: RuleRepository,
    private weaponRepository: WeaponRepository,
    private infoWareAttackRepository: InfoWarAttackRepository,
  ) {}
}
