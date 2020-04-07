import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import Ammo from '../entity/Ammo';

@Service()
class AmmoRepository {
  constructor(@InjectRepository(Ammo) private repository: Repository<Ammo>) {}

  findAll = (): Promise<Ammo[]> => this.repository.find();

  findById = (id: string): Promise<Ammo | undefined> =>
    this.repository.findOne(id);

  findByIds = (ids: string[]): Promise<Ammo[]> => {
    return this.repository.findByIds(ids);
  };

  save = (ammo: Ammo): Promise<Ammo> => this.repository.save(ammo);
}

export default AmmoRepository;
