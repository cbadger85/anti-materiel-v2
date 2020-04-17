import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { Ammo } from '../types/weapon';

const initialState: Ammo[] = [];

const ammoSlice = createSlice({
  name: 'ammo',
  initialState,
  reducers: {
    addAmmo: {
      reducer: (state, action: PayloadAction<Ammo>) => [
        ...state,
        action.payload,
      ],
      prepare: (rule: Omit<Ammo, 'id'>) => ({
        payload: { ...rule, id: shortid() },
      }),
    },
    removeAmmo: (state, action: PayloadAction<string>) =>
      state.filter(rule => rule.id !== action.payload),
    updateAmmo: (state, action: PayloadAction<Ammo>) =>
      state.map(rule =>
        rule.id === action.payload.id ? action.payload : rule,
      ),
  },
});

export default ammoSlice.reducer;

export const { addAmmo, removeAmmo, updateAmmo } = ammoSlice.actions;
