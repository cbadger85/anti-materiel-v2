import express from 'express';
import { asyncHandler } from '../handlers/asyncHandler';
import { requestValidator } from '../handlers/requestValidator';
import { uuidParamValidator } from '../handlers/uuidParamValidator';
import {
  createWeapon,
  getAllWeapons,
  getWeaponById,
} from '../handlers/weaponHandlers';
import WeaponRequest from '../model/WeaponRequest';

const weaponRoutes = express.Router();

weaponRoutes.get('/', asyncHandler(getAllWeapons));
weaponRoutes.post(
  '/',
  requestValidator(WeaponRequest),
  asyncHandler(createWeapon),
);

weaponRoutes.get(
  '/:weaponId',
  uuidParamValidator(),
  asyncHandler(getWeaponById),
);

export default weaponRoutes;
