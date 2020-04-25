import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { WeaponStore } from '../types/weapon';

const initialState: WeaponStore[] = [];

const weaponListSlice = createSlice({
  name: 'weaponList',
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
      state.filter(weapon => weapon.id !== action.payload),
    updateWeapon: (state, action: PayloadAction<WeaponStore>) =>
      state.map(weapon =>
        weapon.id === action.payload.id ? action.payload : weapon,
      ),
  },
});

export default weaponListSlice.reducer;

export const {
  addWeapon,
  removeWeapon,
  updateWeapon,
} = weaponListSlice.actions;
