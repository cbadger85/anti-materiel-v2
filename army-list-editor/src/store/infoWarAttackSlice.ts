import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { InfoWarAttack } from '../types/infoWarAttack';

const initialState: InfoWarAttack[] = [];

const infoWarAttackSlice = createSlice({
  name: 'infoWarAttack',
  initialState,
  reducers: {
    addInfoWarAttack: {
      reducer: (state, action: PayloadAction<InfoWarAttack>) => [
        ...state,
        action.payload,
      ],
      prepare: (rule: Omit<InfoWarAttack, 'id'>) => ({
        payload: { ...rule, id: shortid() },
      }),
    },
    removeInfoWarAttack: (state, action: PayloadAction<string>) =>
      state.filter(rule => rule.id !== action.payload),
    updateInfoWarAttack: (state, action: PayloadAction<InfoWarAttack>) =>
      state.map(rule =>
        rule.id === action.payload.id ? action.payload : rule,
      ),
  },
});

export default infoWarAttackSlice.reducer;

export const {
  addInfoWarAttack,
  removeInfoWarAttack,
  updateInfoWarAttack,
} = infoWarAttackSlice.actions;
