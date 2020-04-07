import express from 'express';
import { asyncHandler } from '../../handlers/asyncHandler';
import { requestValidator } from '../../handlers/requestValidator';
import { uuidParamValidator } from '../../handlers/uuidParamValidator';
import {
  getAllEntries,
  createEntry,
  getEntryById,
} from '../../handlers/entryHandlers';
import EntryRequest from '../../model/EntryRequest';

const entryRoutes = express.Router();

entryRoutes.get('/', asyncHandler(getAllEntries));
entryRoutes.post(
  '/',
  requestValidator(EntryRequest),
  asyncHandler(createEntry),
);

entryRoutes.get('/:entryId', uuidParamValidator(), asyncHandler(getEntryById));

export default entryRoutes;
