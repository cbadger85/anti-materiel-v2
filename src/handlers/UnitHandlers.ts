import { RequestHandler } from 'express-serve-static-core';
import Container from 'typedi';
import Unit from '../entity/Unit';
import UnitRequest from '../model/UnitRequest';
import UnitService from '../service/UnitService';

export const createUnit: RequestHandler<never, Unit, UnitRequest> = async (
  req,
  res,
) => {
  const unitService = Container.get(UnitService);

  const unit = await unitService.createUnit(req.body);

  return res.json(unit);
};

export const getUnitById: RequestHandler<
  { unitId: string },
  Unit,
  never
> = async (req, res) => {
  const unitService = Container.get(UnitService);

  const unit = await unitService.getUnit(req.params.unitId);

  return res.json(unit);
};

export const getAllUnits: RequestHandler<never, Unit[], never> = async (
  req,
  res,
) => {
  const unitService = Container.get(UnitService);

  const units = await unitService.getAllUnits();

  return res.json(units);
};
