import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Entry } from '../types/entry';
import { Sectorial } from '../types/army';
import { AppThunk } from '.';
import { Unit } from '../types/unit';
import { resetToDefault } from './appSlice';

const initialState: Entry[] = [];

const entryListSlice = createSlice({
  name: 'entryList',
  initialState,
  reducers: {
    loadEntryList(state, action: PayloadAction<Entry[]>) {
      return action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(resetToDefault, () => {
      return initialState;
    });
  },
});

export default entryListSlice.reducer;

export const { loadEntryList } = entryListSlice.actions;

export const createEntryList = (sectorial: Sectorial): AppThunk => (
  dispatch,
  getState,
) => {
  const filteredEntries = getState()
    .data.entries.filter(entry => entry.sectorials.includes(sectorial))
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

  dispatch(loadEntryList(filteredEntries));
};
