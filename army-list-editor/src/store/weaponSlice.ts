import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { WeaponStore } from '../types/weapon';

const initialState: WeaponStore[] = [];

const weaponSlice = createSlice({
  name: 'weapons',
  initialState,
  reducers: {
    addWeapon: {
      reducer: (state, action: PayloadAction<WeaponStore>) => [
        ...state,
        action.payload,
      ],
      prepare: (weapon: Omit<WeaponStore, 'id'>) => ({
        payload: { ...weapon, id: shortid() },
      }),
    },
    removeWeapon: (state, action: PayloadAction<string>) =>
      state.filter(rule => rule.id !== action.payload),
    updateWeapon: (state, action: PayloadAction<WeaponStore>) =>
      state.map(rule =>
        rule.id === action.payload.id ? action.payload : rule,
      ),
  },
});

export default weaponSlice.reducer;

export const { addWeapon, removeWeapon, updateWeapon } = weaponSlice.actions;
