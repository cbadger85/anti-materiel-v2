import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { AmmoStore } from '../types/weapon';

const initialState: AmmoStore[] = [];

const ammoSlice = createSlice({
  name: 'ammo',
  initialState,
  reducers: {
    addAmmo: {
      reducer: (state, action: PayloadAction<AmmoStore>) => [
        ...state,
        action.payload,
      ],
      prepare: (rule: Omit<AmmoStore, 'id'>) => ({
        payload: { ...rule, id: shortid() },
      }),
    },
    removeAmmo: (state, action: PayloadAction<string>) =>
      state.filter(rule => rule.id !== action.payload),
    updateAmmo: (state, action: PayloadAction<AmmoStore>) =>
      state.map(rule =>
        rule.id === action.payload.id ? action.payload : rule,
      ),
  },
});

export default ammoSlice.reducer;

export const { addAmmo, removeAmmo, updateAmmo } = ammoSlice.actions;
