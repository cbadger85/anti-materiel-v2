import { createSlice } from '@reduxjs/toolkit';
import { Weapon } from '../types/weapon';
import { loadData } from './appSlice';

const initialState: Weapon[] = [];

const weaponDataSlice = createSlice({
  name: 'weaponData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadData.fulfilled, (state, action) => {
      return action.payload.weapons;
    });
  },
});

export default weaponDataSlice.reducer;
