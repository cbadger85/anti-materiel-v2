import { RequestHandler } from 'express-serve-static-core';
import Container from 'typedi';
import InfoWarAttack from '../entity/InfoWarAttack';
import InfoWarAttackRequest from '../model/InfoWarAttackRequest';
import InfoWarAttackService from '../service/InfoWarAttackService';

export const createInfoWarAttack: RequestHandler<
  never,
  InfoWarAttack,
  InfoWarAttackRequest
> = async (req, res) => {
  const infoWarAttackService = Container.get(InfoWarAttackService);

  const infoWarAttack = await infoWarAttackService.createInfoWarAttack(
    req.body,
  );

  return res.json(infoWarAttack);
};

export const getInfoWarAttackById: RequestHandler<
  { infoWarAttackId: string },
  InfoWarAttack,
  never
> = async (req, res) => {
  const infoWarAttackService = Container.get(InfoWarAttackService);

  const infoWarAttack = await infoWarAttackService.getInfoWarAttack(req.body);

  return res.json(infoWarAttack);
};

export const getAllInfoWarAttacks: RequestHandler<
  never,
  InfoWarAttack[],
  never
> = async (req, res) => {
  const infoWarAttackService = Container.get(InfoWarAttackService);

  const infoWarAttack = await infoWarAttackService.getAllInfoWarAttacks();

  return res.json(infoWarAttack);
};
