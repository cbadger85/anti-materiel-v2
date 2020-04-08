import { createSlice } from '@reduxjs/toolkit';
import { Unit } from '../types/unit';
import { loadData } from './appSlice';

const initialState: Unit[] = [];

const unitSlice = createSlice({
  name: 'infoWarAttacks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadData.fulfilled, (state, action) => {
      return action.payload.units;
    });
  },
});

export default unitSlice.reducer;
