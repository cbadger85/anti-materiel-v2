import { createSlice } from '@reduxjs/toolkit';
import { Entry } from '../types/entry';
import { loadData } from './appSlice';

const initialState: Entry[] = [];

const entrySlice = createSlice({
  name: 'infoWarAttacks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadData.fulfilled, (state, action) => {
      return action.payload.entries;
    });
  },
});

export default entrySlice.reducer;
