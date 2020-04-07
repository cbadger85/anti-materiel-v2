import express from 'express';
import { asyncHandler } from '../../handlers/asyncHandler';
import {
  createInfoWarAttack,
  getAllInfoWarAttacks,
  getInfoWarAttackById,
} from '../../handlers/InfoWarAttackHanders';
import { requestValidator } from '../../handlers/requestValidator';
import { uuidParamValidator } from '../../handlers/uuidParamValidator';
import InfoWarAttackRequest from '../../model/InfoWarAttackRequest';

const infoWarAttackRoutes = express.Router();

infoWarAttackRoutes.get('/', asyncHandler(getAllInfoWarAttacks));
infoWarAttackRoutes.post(
  '/',
  requestValidator(InfoWarAttackRequest),
  asyncHandler(createInfoWarAttack),
);

infoWarAttackRoutes.get(
  '/:infoWarAttackId',
  uuidParamValidator(),
  asyncHandler(getInfoWarAttackById),
);

export default infoWarAttackRoutes;
