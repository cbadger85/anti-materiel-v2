import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { useParams } from 'react-router-dom';
import { Sectorial } from '../../types/army';
import Page from '../Page/Page';
import { Unit } from '../../types/unit';
import { createSelector } from '@reduxjs/toolkit';

const getSectorial = (state: RootState, sectorial: Sectorial) => sectorial;

const getUnitList = (state: RootState) => state.units;

const unitListSelector = createSelector(
  getUnitList,
  getSectorial,
  (units, sectorial) =>
    units
      .filter(unit =>
        unit.profiles.some(profile =>
          profile.sectorials.includes(sectorial as Sectorial),
        ),
      )
      .map<Unit>(unit => {
        const profiles = unit.profiles.filter(profile =>
          profile.sectorials.includes(sectorial as Sectorial),
        );
        return { ...unit, profiles };
      }),
);

const UnitList = () => {
  const { sectorial } = useParams<{ sectorial: Sectorial }>();

  const unitList = useSelector((state: RootState) =>
    unitListSelector(state, sectorial as Sectorial),
  );

  console.log(unitList);

  return (
    <Page>
      <div>Sectorial</div>
    </Page>
  );
};

export default UnitList;
