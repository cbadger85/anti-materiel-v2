import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EntryStore, EntryNote } from '../types/entry';
import { addEntry, updateEntry } from './entryListSlice';
import { Sectorial } from '../types/army';
import shortid from 'shortid';

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
    addEntryNote: {
      reducer: (state, action: PayloadAction<EntryNote>) => {
        state.notes.push(action.payload);

        return state;
      },
      prepare: (note: Omit<EntryNote, 'id'>) => ({
        payload: { ...note, id: shortid() },
      }),
    },
    updateEntryNote: (state, action: PayloadAction<EntryNote>) => {
      const notes = state.notes.map(note =>
        note.id === action.payload.id ? action.payload : note,
      );

      state.notes = notes;

      return state;
    },
    removeEntryNote: (state, action: PayloadAction<string>) => {
      const notes = state.notes.filter(note => note.id !== action.payload);

      state.notes = notes;

      return state;
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
  addEntryNote,
  updateEntryNote,
  removeEntryNote,
} = entryFormSlice.actions;
