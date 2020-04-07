import { Service } from 'typedi';
import EntryRepository from '../repository/EntryRepository';
import ProfileRepository from '../repository/ProfileRepository';
import UnitRepository from '../repository/UnitRepository';
import ProfileService from './ProfileService';
import Entry from '../entity/Entry';
import EntryRequest from '../model/EntryRequest';
import { plainToClass } from 'class-transformer';
import Unit from '../entity/Unit';

@Service()
class EntryService {
  constructor(
    private entryRepository: EntryRepository,
    private profileService: ProfileService,
    private unitRepository: UnitRepository,
  ) {}

  getAllEntries = async (): Promise<Entry[]> =>
    await this.entryRepository.findAll();

  getEntryById = async (id: string): Promise<Entry | undefined> =>
    await this.entryRepository.findById(id);

  createEntry = async ({
    profiles: profilesRequest,
    ...request
  }: EntryRequest): Promise<Entry> => {
    const entry = plainToClass(Entry, request);

    const primaryUnit = await this.unitRepository.findById(
      request.primaryUnitId,
    );

    const secondaryUnits = await this.unitRepository.findByIds(
      request.secondaryUnitIds,
    );

    const profiles = await Promise.all(
      profilesRequest.map(this.profileService.createProfile),
    );

    entry.primaryUnit = primaryUnit as Unit;
    entry.secondaryUnits = secondaryUnits;
    entry.profiles = profiles;

    return this.entryRepository.save(entry);
  };
}

export default EntryService;
