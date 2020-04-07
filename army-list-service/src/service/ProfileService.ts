import { Service } from 'typedi';
import InfoWarAttackRepository from '../repository/InfoWarAttackRepository';
import ProfileRepository from '../repository/ProfileRepository';
import RuleRepository from '../repository/RuleRepository';
import WeaponRepository from '../repository/WeaponRepository';
import ProfileRequest from '../model/ProfileRequest';
import Profile from '../entity/Profile';
import { plainToClass } from 'class-transformer';

@Service()
class ProfileService {
  constructor(
    private ruleRepository: RuleRepository,
    private weaponRepository: WeaponRepository,
    private infoWareAttackRepository: InfoWarAttackRepository,
    private profileRepository: ProfileRepository,
  ) {}

  createProfile = async (request: ProfileRequest): Promise<Profile> => {
    const specialRules = await this.ruleRepository.findByIds(
      request.specialRuleIds,
    );

    const equipment = await this.ruleRepository.findByIds(request.equipmentIds);

    const ccw = await this.weaponRepository.findByIds(request.ccwIds);

    const bsw = await this.weaponRepository.findByIds(request.bswIds);

    const misc = await this.weaponRepository.findByIds(request.miscIds);

    const infoWarAttacks = await this.infoWareAttackRepository.findByIds(
      request.infoWarAttackIds,
    );

    const addsProfiles = await this.profileRepository.findByIds(
      request.addsProfileIds,
    );

    return plainToClass(Profile, {
      ...request,
      specialRules,
      equipment,
      ccw,
      bsw,
      misc,
      infoWarAttacks,
      addsProfiles,
    });
  };
}

export default ProfileService;
