import { RequestHandler } from 'express-serve-static-core';
import Container from 'typedi';
import Weapon from '../entity/Weapon';
import WeaponRequest from '../model/WeaponRequest';
import WeaponService from '../service/WeaponService';

export const createWeapon: RequestHandler<
  never,
  Weapon,
  WeaponRequest
> = async (req, res) => {
  const weaponService = Container.get(WeaponService);

  const weapon = await weaponService.createWeapon(req.body);

  return res.json(weapon);
};

export const getWeaponById: RequestHandler<
  { weaponId: string },
  Weapon,
  never
> = async (req, res) => {
  const weaponService = Container.get(WeaponService);

  const weapon = await weaponService.getWeapon(req.params.weaponId);

  return res.json(weapon);
};

export const getAllWeapons: RequestHandler<never, Weapon[], never> = async (
  req,
  res,
) => {
  const weaponService = Container.get(WeaponService);

  const weapon = await weaponService.getAllWeapons();

  return res.json(weapon);
};
