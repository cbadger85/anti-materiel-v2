import { plainToClass } from 'class-transformer';
import { Service } from 'typedi';
import InfoWarAttack from '../entity/InfoWarAttack';
import InfoWarAttackRequest from '../model/InfoWarAttackRequest';
import AmmoRepository from '../repository/AmmoRepository';
import InfoWarAttackRepository from '../repository/InfoWarAttackRepository';

@Service()
class InfoWarAttackService {
  constructor(
    private infoWareAttackRepository: InfoWarAttackRepository,
    private ammoRepository: AmmoRepository,
  ) {}

  getInfoWarAttack = async (id: string): Promise<InfoWarAttack | undefined> =>
    await this.infoWareAttackRepository.findById(id);

  getAllInfoWarAttacks = async (): Promise<InfoWarAttack[]> =>
    await this.infoWareAttackRepository.findAll();

  createInfoWarAttack = async (
    request: InfoWarAttackRequest,
  ): Promise<InfoWarAttack> => {
    const ammo = await this.ammoRepository.findByIds(request.ammoIds);

    const infoWarAttack = plainToClass(InfoWarAttack, { ...request, ammo });

    return await this.infoWareAttackRepository.save(infoWarAttack);
  };
}

export default InfoWarAttackService;
