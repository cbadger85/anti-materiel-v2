import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { EntryStore } from '../types/entry';

const initialState: EntryStore[] = [];

const entryListSlice = createSlice({
  name: 'entryList',
  initialState,
  reducers: {
    addEntry: {
      reducer: (state, action: PayloadAction<EntryStore>) => [
        ...state,
        action.payload,
      ],
      prepare: (entry: Omit<EntryStore, 'id'>) => ({
        payload: { ...entry, id: shortid() },
      }),
    },
    removeEntry: (state, action: PayloadAction<string>) =>
      state.filter(entry => entry.id !== action.payload),
    updateEntry: (state, action: PayloadAction<EntryStore>) =>
      state.map(entry =>
        entry.id === action.payload.id ? action.payload : entry,
      ),
  },
});

export default entryListSlice.reducer;

export const { addEntry, removeEntry, updateEntry } = entryListSlice.actions;
