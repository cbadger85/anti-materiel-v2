import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { AmmoStore } from '../types/weapon';

const initialState: AmmoStore[] = [];

const ammoListSlice = createSlice({
  name: 'ammoList',
  initialState,
  reducers: {
    addAmmo: {
      reducer: (state, action: PayloadAction<AmmoStore>) => [
        ...state,
        action.payload,
      ],
      prepare: (ammo: AmmoStore) => ({
        payload: {
          ...ammo,
          id: shortid(),
        },
      }),
    },
    removeAmmo: (state, action: PayloadAction<string>) =>
      state
        .filter(ammo => ammo.id !== action.payload)
        .filter(ammo => !ammo.combinedAmmoIds.includes(action.payload)),
    updateAmmo: (state, action: PayloadAction<AmmoStore>) =>
      state.map(ammo =>
        ammo.id === action.payload.id ? action.payload : ammo,
      ),
  },
});

export default ammoListSlice.reducer;

export const { addAmmo, removeAmmo, updateAmmo } = ammoListSlice.actions;
