import { createSlice } from '@reduxjs/toolkit';
import { editEntry, clearEntry } from './EntryFormSlice';
import { addEntry, updateEntry } from './entryListSlice';

const entryFormModeSlice = createSlice({
  name: 'entryFormMode',
  initialState: false,
  reducers: {
    enterFormMode: () => true,
  },
  extraReducers: builder => {
    builder.addCase(addEntry.type, () => false);
    builder.addCase(updateEntry.type, () => false);
    builder.addCase(editEntry.type, () => true);
    builder.addCase(clearEntry.type, () => false);
  },
});

export default entryFormModeSlice.reducer;

export const { enterFormMode } = entryFormModeSlice.actions;
