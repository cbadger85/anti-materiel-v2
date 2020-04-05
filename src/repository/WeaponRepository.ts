import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import Weapon from '../entity/Weapon';

@Service()
class WeaponRepository {
  constructor(
    @InjectRepository(Weapon)
    private repository: Repository<Weapon>,
  ) {}

  findAll = (): Promise<Weapon[]> => this.repository.find();

  findById = (id: string): Promise<Weapon | undefined> =>
    this.repository.findOne(id);

  save = (weapon: Weapon): Promise<Weapon> => this.repository.save(weapon);
}

export default WeaponRepository;
