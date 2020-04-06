import { RequestHandler } from 'express-serve-static-core';
import Container from 'typedi';
import Ammo from '../entity/Ammo';
import Rule from '../entity/Rule';
import AmmoRequest from '../model/AmmoRequest';
import AmmoService from '../service/AmmoService';

export const createAmmo: RequestHandler<never, Ammo, AmmoRequest> = async (
  req,
  res,
) => {
  const ammoService = Container.get(AmmoService);

  const ammo = await ammoService.createAmmo(req.body);

  return res.json(ammo);
};

export const getAmmoById: RequestHandler<
  { ammoId: string },
  Rule,
  never
> = async (req, res) => {
  const ammoService = Container.get(AmmoService);

  const ammo = await ammoService.getAmmo(req.params.ammoId);

  return res.json(ammo);
};

export const getAllAmmo: RequestHandler<never, Ammo[], never> = async (
  req,
  res,
) => {
  const ammoService = Container.get(AmmoService);

  const ammo = await ammoService.getAllAmmo();

  return res.json(ammo);
};
