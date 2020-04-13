import { createSlice } from '@reduxjs/toolkit';
import { Entry } from '../types/entry';
import { loadData } from './appSlice';

const initialState: Entry[] = [];

const entryDataSlice = createSlice({
  name: 'entryData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadData.fulfilled, (state, action) => {
      return action.payload.entries;
    });
  },
});

export default entryDataSlice.reducer;
