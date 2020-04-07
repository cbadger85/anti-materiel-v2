import { plainToClass } from 'class-transformer';
import { Service } from 'typedi';
import Unit from '../entity/Unit';
import UnitRequest from '../model/UnitRequest';
import ProfileRepository from '../repository/ProfileRepository';
import UnitRepository from '../repository/UnitRepository';
import ProfileService from './ProfileService';

@Service()
class UnitService {
  constructor(
    private unitRepository: UnitRepository,
    private profileRepository: ProfileRepository,
    private profileService: ProfileService,
  ) {}

  getAllUnits = async (): Promise<Unit[]> =>
    await this.unitRepository.findAll();

  getUnit = async (id: string): Promise<Unit | undefined> => {
    const unit = await this.unitRepository.findById(id);
    return unit;
  };

  createUnit = async (request: UnitRequest): Promise<Unit> => {
    const profileEntities = request.profiles.map(
      this.profileService.createProfile,
    );

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
