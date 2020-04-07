import express from 'express';
import {
  createAmmo,
  getAllAmmo,
  getAmmoById,
} from '../../handlers/ammoHandlers';
import { asyncHandler } from '../../handlers/asyncHandler';
import { requestValidator } from '../../handlers/requestValidator';
import { uuidParamValidator } from '../../handlers/uuidParamValidator';
import AmmoRequest from '../../model/AmmoRequest';

const ammoRoutes = express.Router();

ammoRoutes.get('/', asyncHandler(getAllAmmo));
ammoRoutes.post('/', requestValidator(AmmoRequest), asyncHandler(createAmmo));

ammoRoutes.get('/:ammoId', uuidParamValidator(), asyncHandler(getAmmoById));

export default ammoRoutes;
