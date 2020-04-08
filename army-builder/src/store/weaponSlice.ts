import { createSlice } from '@reduxjs/toolkit';
import { Weapon } from '../types/weapon';
import { loadData } from './appSlice';

const initialState: Weapon[] = [];

const weaponSlice = createSlice({
  name: 'weapons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadData.fulfilled, (state, action) => {
      return action.payload.weapons;
    });
  },
});

export default weaponSlice.reducer;
