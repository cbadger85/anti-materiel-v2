import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import Entry from '../entity/Entry';

@Service()
class EntryRepository {
  constructor(
    @InjectRepository(Entry)
    private repository: Repository<Entry>,
  ) {}

  findAll = (): Promise<Entry[]> => this.repository.find();

  findById = (id: string): Promise<Entry | undefined> =>
    this.repository.findOne(id);

  save = (entry: Entry): Promise<Entry> => this.repository.save(entry);
}

export default EntryRepository;
