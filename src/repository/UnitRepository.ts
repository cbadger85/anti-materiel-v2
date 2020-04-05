import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import Unit from '../entity/Unit';

@Service()
class UnitRepository {
  constructor(
    @InjectRepository(Unit)
    private repository: Repository<Unit>,
  ) {}

  findAll = (): Promise<Unit[]> => this.repository.find();

  findById = (id: string): Promise<Unit | undefined> =>
    this.repository.findOne(id);

  save = (unit: Unit): Promise<Unit> => this.repository.save(unit);
}

export default UnitRepository;
