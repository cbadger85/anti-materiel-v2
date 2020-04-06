import { plainToClass } from 'class-transformer';
import { Service } from 'typedi';
import Ammo from '../entity/Ammo';
import AmmoRequest from '../model/AmmoRequest';
import AmmoRepository from '../repository/AmmoRepository';

@Service()
class AmmoService {
  constructor(private ammoRepository: AmmoRepository) {}

  getAmmo = async (id: string): Promise<Ammo | undefined> =>
    await this.ammoRepository.findById(id);

  getAllAmmo = async (): Promise<Ammo[]> => await this.ammoRepository.findAll();

  createAmmo = async (request: AmmoRequest): Promise<Ammo> => {
    const combinedAmmo = await this.ammoRepository.findByIds(
      request.combinedAmmo || [],
    );

    return await this.ammoRepository.save(
      plainToClass(Ammo, {
        name: request.name,
        link: request.link,
        combinedAmmo,
      }),
    );
  };
}

export default AmmoService;
