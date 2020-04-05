import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import InfoWarAttack from '../entity/InfoWarAttack';

@Service()
class InfoWarAttackRepository {
  constructor(
    @InjectRepository(InfoWarAttack)
    private repository: Repository<InfoWarAttack>,
  ) {}

  findAll = (): Promise<InfoWarAttack[]> => this.repository.find();

  findById = (id: string): Promise<InfoWarAttack | undefined> =>
    this.repository.findOne(id);

  save = (infoWarAttack: InfoWarAttack): Promise<InfoWarAttack> =>
    this.repository.save(infoWarAttack);
}

export default InfoWarAttackRepository;
