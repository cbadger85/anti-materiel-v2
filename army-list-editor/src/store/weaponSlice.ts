import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { Weapon } from '../types/weapon';

const initialState: Weapon[] = [];

const weaponSlice = createSlice({
  name: 'weapons',
  initialState,
  reducers: {
    addWeapon: {
      reducer: (state, action: PayloadAction<Weapon>) => [
        ...state,
        action.payload,
      ],
      prepare: (rule: Omit<Weapon, 'id'>) => ({
        payload: { ...rule, id: shortid() },
      }),
    },
    removeWeapon: (state, action: PayloadAction<string>) =>
      state.filter(rule => rule.id !== action.payload),
    updateWeapon: (state, action: PayloadAction<Weapon>) =>
      state.map(rule =>
        rule.id === action.payload.id ? action.payload : rule,
      ),
  },
});

export default weaponSlice.reducer;

export const { addWeapon, removeWeapon, updateWeapon } = weaponSlice.actions;
