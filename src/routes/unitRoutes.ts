import express from 'express';
import { asyncHandler } from '../handlers/asyncHandler';
import { requestValidator } from '../handlers/requestValidator';
import { createUnit, getAllUnits, getUnitById } from '../handlers/UnitHandlers';
import { uuidParamValidator } from '../handlers/uuidParamValidator';
import UnitRequest from '../model/UnitRequest';

const unitRoutes = express.Router();

unitRoutes.get('/', asyncHandler(getAllUnits));
unitRoutes.post('/', requestValidator(UnitRequest), asyncHandler(createUnit));

unitRoutes.get('/:unitId', uuidParamValidator(), asyncHandler(getUnitById));

export default unitRoutes;
