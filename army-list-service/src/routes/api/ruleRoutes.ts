import express from 'express';
import { requestValidator } from '../../handlers/requestValidator';
import RuleRequest from '../../model/RuleRequest';
import { asyncHandler } from '../../handlers/asyncHandler';
import {
  getRuleById,
  getAllRules,
  createRule,
} from '../../handlers/ruleHandlers';
import { uuidParamValidator } from '../../handlers/uuidParamValidator';

const ruleRoutes = express.Router();

ruleRoutes.get('/', asyncHandler(getAllRules));
ruleRoutes.post('/', requestValidator(RuleRequest), asyncHandler(createRule));

ruleRoutes.get('/:ruleId', uuidParamValidator(), asyncHandler(getRuleById));

export default ruleRoutes;
