import { Service } from 'typedi';
import AmmoRepository from '../repository/AmmoRepository';
import WeaponRepository from '../repository/WeaponRepository';
import Weapon from '../entity/Weapon';
import WeaponRequest from '../model/WeaponRequest';
import RuleRepository from '../repository/RuleRepository';
import { plainToClass } from 'class-transformer';
import WeaponMode from '../entity/WeaponMode';
import Rule from '../entity/Rule';
import Ammo from '../entity/Ammo';
import WeaponRangeBand from '../entity/WeaponRangeBand';

@Service()
class WeaponService {
  constructor(
    private weaponRepository: WeaponRepository,
    private ammoRepository: AmmoRepository,
    private rulesRepository: RuleRepository,
  ) {}

  getWeapon = async (id: string): Promise<Weapon | undefined> =>
    await this.weaponRepository.findById(id);

  getAllWeapons = async (): Promise<Weapon[]> =>
    await this.weaponRepository.findAll();

  createWeapon = async (request: WeaponRequest): Promise<Weapon> => {
    const ammoList = await Promise.all(
      request.weaponModes.map(
        async mode => await this.ammoRepository.findByIds(mode.ammoIds),
      ),
    );

    const flattendAmmo = ammoList.reduce((acc, ammo) => [...acc, ...ammo], []);

    const traitsList = await Promise.all(
      request.weaponModes.map(
        async mode => await this.rulesRepository.findByIds(mode.traitIds),
      ),
    );

    const flattenedTraits = traitsList.reduce(
      (acc, traits) => [...acc, ...traits],
      [],
    );

    const weaponModes = request.weaponModes.map(mode => {
      const weaponMode = plainToClass(WeaponMode, mode);

      const traits = mode.traitIds.reduce<Rule[]>((acc, id) => {
        const trait = flattenedTraits.find(trait => trait.id === id);

        return trait ? [...acc, trait] : acc;
      }, []);

      weaponMode.traits = traits;

      const ammo = mode.ammoIds.reduce<Ammo[]>((acc, id) => {
        const ammo = flattendAmmo.find(ammo => ammo.id === id);

        return ammo ? [...acc, ammo] : acc;
      }, []);

      weaponMode.ammo = ammo;

      const rangeBands = mode.weaponRangeBands?.map(rangeBand =>
        plainToClass(WeaponRangeBand, rangeBand),
      );

      weaponMode.weaponRangeBands = rangeBands;

      return weaponMode;
    });

    const weapon = plainToClass(Weapon, { ...request });
    weapon.weaponModes = weaponModes;

    return await this.weaponRepository.save(weapon);
  };
}

export default WeaponService;
