import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { Entry } from '../types/entry';

const initialState: Entry[] = [];

const entrySlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    addEntry: {
      reducer: (state, action: PayloadAction<Entry>) => [
        ...state,
        action.payload,
      ],
      prepare: (rule: Omit<Entry, 'id'>) => ({
        payload: { ...rule, id: shortid() },
      }),
    },
    removeEntry: (state, action: PayloadAction<string>) =>
      state.filter(rule => rule.id !== action.payload),
    updateEntry: (state, action: PayloadAction<Entry>) =>
      state.map(rule =>
        rule.id === action.payload.id ? action.payload : rule,
      ),
  },
});

export default entrySlice.reducer;

export const { addEntry, removeEntry, updateEntry } = entrySlice.actions;
