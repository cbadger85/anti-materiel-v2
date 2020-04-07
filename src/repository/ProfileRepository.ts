import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import Profile from '../entity/Profile';

@Service()
class ProfileRepository {
  constructor(
    @InjectRepository(Profile) private repository: Repository<Profile>,
  ) {}

  findAll = (): Promise<Profile[]> => this.repository.find();

  findById = (id: string): Promise<Profile | undefined> =>
    this.repository.findOne(id);

  findByIds = (ids: string[]): Promise<Profile[]> =>
    this.repository.findByIds(ids);

  save = (profile: Profile): Promise<Profile> => this.repository.save(profile);

  saveAll = (profiles: Profile[]): Promise<Profile[]> =>
    this.repository.save(profiles);
}

export default ProfileRepository;
