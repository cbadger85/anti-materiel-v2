import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EntryStore, EntryNote } from '../types/entry';
import { addEntry, updateEntry } from './entryListSlice';
import { Sectorial } from '../types/army';
import shortid from 'shortid';
import { UnitStore } from '../types/unit';
import { ProfileStore } from '../types/profile';
import {
  EntryValidation,
  EntryRequiresEntry,
  EntryForbidsEntry,
  EntryRequiresEntryInCombatGroup,
  EntryRequiresRuleInCombatGroup,
} from '../types/validationRules';

type ValidatorPrepare =
  | Omit<EntryRequiresEntry, 'id'>
  | Omit<EntryForbidsEntry, 'id'>
  | Omit<EntryRequiresEntryInCombatGroup, 'id'>
  | Omit<EntryRequiresRuleInCombatGroup, 'id'>;

const initialState: EntryStore = {
  id: '',
  isc: '',
  name: '',
  sectorials: [],
  units: [],
  profiles: [],
  notes: [],
  validation: [],
};

interface EntryDetailsPayload {
  name: string;
  isc?: string;
  sectorials: Sectorial[];
}

const entryFormSlice = createSlice({
  name: 'entryForm',
  initialState,
  reducers: {
    clearEntry: () => initialState,
    editEntry: (state, action: PayloadAction<EntryStore>) => action.payload,
    addEntryDetails: (state, action: PayloadAction<EntryDetailsPayload>) => ({
      ...state,
      ...action.payload,
    }),
    addEntryUnit: {
      reducer: (state, action: PayloadAction<UnitStore>) => {
        state.units.push(action.payload);
      },
      prepare: (note: Omit<UnitStore, 'id'>) => ({
        payload: { ...note, id: shortid() },
      }),
    },
    updateEntryUnit: (state, action: PayloadAction<UnitStore>) => {
      state.units = state.units.map(unit =>
        unit.id === action.payload.id ? action.payload : unit,
      );
    },
    removeEntryUnit: (state, action: PayloadAction<string>) => {
      state.units = state.units.filter(unit => unit.id !== action.payload);
    },
    addEntryProfile: {
      reducer: (state, action: PayloadAction<ProfileStore>) => {
        state.profiles.push(action.payload);
      },
      prepare: (note: Omit<ProfileStore, 'id'>) => ({
        payload: { ...note, id: shortid() },
      }),
    },
    updateEntryProfile: (state, action: PayloadAction<ProfileStore>) => {
      state.profiles = state.profiles.map(profile =>
        profile.id === action.payload.id ? action.payload : profile,
      );
    },
    removeEntryProfile: (state, action: PayloadAction<string>) => {
      state.profiles = state.profiles.filter(
        profile => profile.id !== action.payload,
      );
    },
    addEntryNote: {
      reducer: (state, action: PayloadAction<EntryNote>) => {
        state.notes.push(action.payload);
      },
      prepare: (note: Omit<EntryNote, 'id'>) => ({
        payload: { ...note, id: shortid() },
      }),
    },
    updateEntryNote: (state, action: PayloadAction<EntryNote>) => {
      state.notes = state.notes.map(note =>
        note.id === action.payload.id ? action.payload : note,
      );
    },
    removeEntryNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
    addEntryValidation: {
      reducer: (state, action: PayloadAction<EntryValidation>) => {
        state.validation.push(action.payload);
      },
      prepare: (validator: ValidatorPrepare) => ({
        payload: { ...validator, id: shortid() },
      }),
    },
    updateEntryValidation: (state, action: PayloadAction<EntryValidation>) => {
      state.validation.map(validator =>
        validator.id === action.payload.id ? action.payload : validator,
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(addEntry.type, () => initialState);
    builder.addCase(updateEntry.type, () => initialState);
  },
});

export default entryFormSlice.reducer;

export const {
  editEntry,
  addEntryDetails,
  clearEntry,
  addEntryUnit,
  updateEntryUnit,
  removeEntryUnit,
  addEntryProfile,
  updateEntryProfile,
  removeEntryProfile,
  addEntryNote,
  updateEntryNote,
  removeEntryNote,
} = entryFormSlice.actions;
