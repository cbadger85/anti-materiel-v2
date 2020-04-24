import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EntryStore } from '../types/entry';
import { addEntry, updateEntry } from './entryListSlice';
import { Sectorial } from '../types/army';

const initialState: EntryStore = {
  id: '',
  isc: '',
  name: '',
  sectorials: [],
  units: [],
  profiles: [],
  notes: [],
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
} = entryFormSlice.actions;
