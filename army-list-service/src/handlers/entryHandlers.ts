import { RequestHandler } from 'express-serve-static-core';
import Container from 'typedi';
import Entry from '../entity/Entry';
import EntryRequest from '../model/EntryRequest';
import EntryService from '../service/EntryService';

export const createEntry: RequestHandler<never, Entry, EntryRequest> = async (
  req,
  res,
) => {
  const entryService = Container.get(EntryService);

  const entry = await entryService.createEntry(req.body);

  return res.json(entry);
};

export const getEntryById: RequestHandler<
  { entryId: string },
  Entry,
  never
> = async (req, res) => {
  const entryService = Container.get(EntryService);

  const entry = await entryService.getEntryById(req.params.entryId);

  return res.json(entry);
};

export const getAllEntries: RequestHandler<never, Entry[], never> = async (
  req,
  res,
) => {
  const entryService = Container.get(EntryService);

  const entry = await entryService.getAllEntries();

  return res.json(entry);
};
