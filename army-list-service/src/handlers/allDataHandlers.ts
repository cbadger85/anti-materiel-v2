import { RequestHandler } from 'express-serve-static-core';
import Container from 'typedi';
import Ammo from '../entity/Ammo';
import AmmoService from '../service/AmmoService';
import Weapon from '../entity/Weapon';
import InfoWarAttack from '../entity/InfoWarAttack';
import Rule from '../entity/Rule';
import Unit from '../entity/Unit';
import WeaponService from '../service/WeaponService';
import InfoWarAttackService from '../service/InfoWarAttackService';
import RuleService from '../service/RuleService';
import UnitService from '../service/UnitService';
import EntryService from '../service/EntryService';
import Entry from '../entity/Entry';

export const getAllData: RequestHandler<never, AllData, never> = async (
  req,
  res,
) => {
  const ammoService = Container.get(AmmoService);
  const weaponService = Container.get(WeaponService);
  const infoWarAttackService = Container.get(InfoWarAttackService);
  const ruleService = Container.get(RuleService);
  const unitService = Container.get(UnitService);
  const entryService = Container.get(EntryService);

  const ammo = await ammoService.getAllAmmo();
  const weapons = await weaponService.getAllWeapons();
  const infoWarAttacks = await infoWarAttackService.getAllInfoWarAttacks();
  const rules = await ruleService.getAllRules();
  const units = await unitService.getAllUnits();
  const entries = await entryService.getAllEntries();

  return res.json({
    ammo,
    weapons,
    infoWarAttacks,
    rules,
    units,
    entries,
  });
};

interface AllData {
  ammo: Ammo[];
  weapons: Weapon[];
  infoWarAttacks: InfoWarAttack[];
  rules: Rule[];
  units: Unit[];
  entries: Entry[];
}
