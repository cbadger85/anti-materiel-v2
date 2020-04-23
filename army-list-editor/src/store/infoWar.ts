import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { InfoWarStore } from '../types/infoWarAttack';

const initialState: InfoWarStore[] = [];

const infoWarSlice = createSlice({
  name: 'infoWar',
  initialState,
  reducers: {
    addInfoWar: {
      reducer: (state, action: PayloadAction<InfoWarStore>) => [
        ...state,
        action.payload,
      ],
      prepare: (rule: Omit<InfoWarStore, 'id'>) => ({
        payload: { ...rule, id: shortid() },
      }),
    },
    removeInfoWar: (state, action: PayloadAction<string>) =>
      state.filter(rule => rule.id !== action.payload),
    updateInfoWar: (state, action: PayloadAction<InfoWarStore>) =>
      state.map(rule =>
        rule.id === action.payload.id ? action.payload : rule,
      ),
  },
});

export default infoWarSlice.reducer;

export const {
  addInfoWar,
  removeInfoWar,
  updateInfoWar,
} = infoWarSlice.actions;
