import { createSlice } from '@reduxjs/toolkit';
import { InfoWarAttack } from '../types/infoWarAttack';
import { loadData } from './appSlice';

const initialState: InfoWarAttack[] = [];

const infoWarAttackDataSlice = createSlice({
  name: 'infoWarAttackData',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadData.fulfilled, (state, action) => {
      return action.payload.infoWarAttacks;
    });
  },
});

export default infoWarAttackDataSlice.reducer;
