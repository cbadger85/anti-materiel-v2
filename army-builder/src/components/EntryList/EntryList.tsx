import { createSelector } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { Sectorial } from '../../types/army';
import { Entry } from '../../types/entry';
import { Unit } from '../../types/unit';
import EntryAccordion from '../EntryAccordion/EntryAccordion';
import styles from './EntryList.module.scss';

const getSectorial = (state: RootState, sectorial: Sectorial) => sectorial;

const getEntryList = (state: RootState) => state.entries;

const getFilteredEntryList = (entries: Entry[], sectorial: Sectorial) => {
  return entries
    .filter(entry => entry.sectorials.includes(sectorial))
    .map<Entry>(entry => {
      const primaryUnitProfiles = entry.primaryUnit.profiles.filter(profile =>
        profile.sectorials.includes(sectorial),
      );

      const secondaryUnits = entry.secondaryUnits.map<Unit>(unit => {
        const profiles = unit.profiles.filter(profile =>
          profile.sectorials.includes(sectorial),
        );

        return { ...unit, profiles };
      });

      const profiles = entry.profiles.filter(profile =>
        profile.sectorials.includes(sectorial),
      );

      return {
        ...entry,
        primaryUnit: { ...entry.primaryUnit, profiles: primaryUnitProfiles },
        secondaryUnits,
        profiles,
      };
    });
};

const unitListSelector = createSelector(
  getEntryList,
  getSectorial,
  getFilteredEntryList,
);

const EntryList: React.FC<EntryListProps> = ({ sectorial }) => {
  const [openAccordion, setOpenAccordion] = useState<string>();

  const toggleAccordion = (entryId: string) => {
    setOpenAccordion(id => (id !== entryId ? entryId : undefined));
  };

  const entryList = useSelector((state: RootState) =>
    unitListSelector(state, sectorial),
  );

  console.log(entryList);

  return (
    <div className={styles.container}>
      {entryList.map(entry => (
        <EntryAccordion
          key={entry.id}
          isOpen={openAccordion === entry.id}
          toggleAccordion={toggleAccordion}
          entry={entry}
        />
      ))}
    </div>
  );
};

export default EntryList;

interface EntryListProps {
  sectorial: Sectorial;
}
