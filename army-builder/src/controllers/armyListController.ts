import axios from 'axios';
import {
  AmmoResponse,
  WeaponResponse,
  Ammo,
  WeaponMode,
  Weapon,
} from '../types/weapon';
import { InfoWarAttack, InfoWarAttackResponse } from '../types/infoWarAttack';
import { UnitResponse, Unit } from '../types/unit';
import { EntryResponse, Entry } from '../types/entry';

export const ammoBuilder = (ammoResponse: AmmoResponse[]) =>
  ammoResponse.map<Ammo>(({ id, combinedAmmoIds, link, name }) => {
    if (combinedAmmoIds.length) {
      const combinedAmmo = combinedAmmoIds.map<Ammo>(ammoId => {
        const { id, link, name } = ammoResponse.find(
          ammo => ammo.id === ammoId,
        ) as AmmoResponse;
        return { id, link, name, combinedAmmo: [] };
      });

      return { id, name, link, combinedAmmo };
    }

    return { id, name, link, combinedAmmo: [] };
  });

export const weaponBuilder = (weaponResponse: WeaponResponse[], ammo: Ammo[]) =>
  weaponResponse.map<Weapon>(weapon => {
    const weaponModes = weapon.weaponModes.map<WeaponMode>(mode => {
      const modeAmmo = ammo.filter(({ id }) => mode.ammoIds.includes(id));

      return {
        id: mode.id,
        name: mode.name,
        traits: mode.traits,
        burst: mode.burst,
        damage: mode.damage,
        weaponRangeBands: mode.weaponRangeBands,
        ammo: modeAmmo,
      };
    });

    return {
      id: weapon.id,
      name: weapon.name,
      link: weapon.link,
      weaponModes,
    };
  });

export const infoWarAttackBuilder = (
  infoWarAttackResponse: InfoWarAttackResponse[],
  ammo: Ammo[],
) =>
  infoWarAttackResponse.map<InfoWarAttack>(({ ammoIds, ...infoWarAttack }) => {
    const infoWarAttackAmmo = ammo.filter(({ id }) => ammoIds.includes(id));

    return {
      ...infoWarAttack,
      ammo: infoWarAttackAmmo,
    };
  });

export const unitBuilder = (unitResponse: UnitResponse[]) =>
  unitResponse.map<Unit>(({ additionalUnitIds, ...unit }) => {
    const additionalUnits = unitResponse
      .filter(({ id }) => additionalUnitIds.includes(id))
      .map<Unit>(({ additionalUnitIds, ...unit }) => ({
        ...unit,
        additionalUnits: [],
      }));

    return { ...unit, additionalUnits };
  });

export const entryBuilder = (entryResponse: EntryResponse[], units: Unit[]) =>
  entryResponse.map<Entry>(({ primaryUnitId, secondaryUnitIds, ...entry }) => {
    const primaryUnit = units.find(({ id }) => id === primaryUnitId) as Unit;
    const secondaryUnits = units.filter(({ id }) =>
      secondaryUnitIds.includes(id),
    );

    return {
      ...entry,
      primaryUnit,
      secondaryUnits,
    };
  });

export const getAllData = async () => {
  const { data } = await axios.get<AllDataResponse>('/api/all');
  const ammo = ammoBuilder(data.ammo);
  const weapons = weaponBuilder(data.weapons, ammo);
  const infoWarAttacks = infoWarAttackBuilder(data.infoWarAttacks, ammo);
  const units = unitBuilder(data.units);
  const entries = entryBuilder(data.entries, units);

  return { weapons, infoWarAttacks, units, entries };
};

export type AllData = ReturnType<typeof getAllData>;

interface AllDataResponse {
  ammo: AmmoResponse[];
  weapons: WeaponResponse[];
  infoWarAttacks: InfoWarAttackResponse[];
  units: UnitResponse[];
  entries: EntryResponse[];
}
