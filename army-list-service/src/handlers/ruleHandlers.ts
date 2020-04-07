import { RequestHandler } from 'express-serve-static-core';
import Rule from '../entity/Rule';
import RuleRequest from '../model/RuleRequest';
import Container from 'typedi';
import RuleService from '../service/RuleService';

export const createRule: RequestHandler<never, Rule, RuleRequest> = async (
  req,
  res,
) => {
  const ruleService = Container.get(RuleService);

  const rule = await ruleService.createRule(req.body);

  return res.json(rule);
};

export const getRuleById: RequestHandler<
  { ruleId: string },
  Rule,
  never
> = async (req, res) => {
  const ruleService = Container.get(RuleService);

  const rule = await ruleService.getRule(req.params.ruleId);

  return res.json(rule);
};

export const getAllRules: RequestHandler<never, Rule[], never> = async (
  req,
  res,
) => {
  const ruleService = Container.get(RuleService);

  const rules = await ruleService.getAllRules();

  return res.json(rules);
};
