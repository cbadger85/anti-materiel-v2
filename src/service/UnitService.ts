import { plainToClass } from 'class-transformer';
import { Service } from 'typedi';
import Profile from '../entity/Profile';
import Unit from '../entity/Unit';
import UnitRequest from '../model/UnitRequest';
import InfoWarAttackRepository from '../repository/InfoWarAttackRepository';
import ProfileRepository from '../repository/ProfileRepository';
import RuleRepository from '../repository/RuleRepository';
import UnitRepository from '../repository/UnitRepository';
import WeaponRepository from '../repository/WeaponRepository';

@Service()
class UnitService {
  constructor(
    private unitRepository: UnitRepository,
    private ruleRepository: RuleRepository,
    private weaponRepository: WeaponRepository,
    private infoWareAttackRepository: InfoWarAttackRepository,
    private profileRepository: ProfileRepository,
  ) {}

  getAllUnits = async (): Promise<Unit[]> =>
    await this.unitRepository.findAll();

  getUnit = async (id: string): Promise<Unit | undefined> => {
    const unit = await this.unitRepository.findById(id);
    return unit;
  };

  createUnit = async (request: UnitRequest): Promise<Unit> => {
    const profileEntities = request.profiles.map(async profileRequest => {
      const specialRules = await this.ruleRepository.findByIds(
        profileRequest.specialRuleIds,
      );

      const equipment = await this.ruleRepository.findByIds(
        profileRequest.equipmentIds,
      );

      const ccw = await this.weaponRepository.findByIds(profileRequest.ccwIds);

      const bsw = await this.weaponRepository.findByIds(profileRequest.bswIds);

      const misc = await this.weaponRepository.findByIds(
        profileRequest.miscIds,
      );

      const infoWarAttacks = await this.infoWareAttackRepository.findByIds(
        profileRequest.infoWarAttackIds,
      );

      const addsProfiles = await this.unitRepository.findByIds(
        profileRequest.addsProfileIds,
      );

      const profile: Profile = plainToClass(Profile, {
        ...profileRequest,
        specialRules,
        equipment,
        ccw,
        bsw,
        misc,
        infoWarAttacks,
        addsProfiles,
      });

      return profile;
    });

    const profiles = await this.profileRepository.saveAll(
      await Promise.all(profileEntities),
    );

    const additionalUnits = await this.unitRepository.findByIds(
      request.additionalUnitIds,
    );

    const unit = plainToClass(Unit, request);
    unit.profiles = profiles;
    unit.additionalUnits = additionalUnits;

    return this.unitRepository.save(unit);
  };
}

export default UnitService;
