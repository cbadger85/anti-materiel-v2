import { createSlice } from '@reduxjs/toolkit';
import { Unit } from '../types/unit';
import { loadData } from './appSlice';

const initialState: Unit[] = [];

const unitDataSlice = createSlice({
  name: 'unitData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadData, (state, action) => {
      return action.payload.units;
    });
  },
});

export default unitDataSlice.reducer;
