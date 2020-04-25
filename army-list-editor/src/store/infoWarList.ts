import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { InfoWarStore } from '../types/infoWar';

const initialState: InfoWarStore[] = [];

const infoWarListSlice = createSlice({
  name: 'infoWarList',
  initialState,
  reducers: {
    addInfoWar: {
      reducer: (state, action: PayloadAction<InfoWarStore>) => [
        ...state,
        action.payload,
      ],
      prepare: (infoWar: Omit<InfoWarStore, 'id'>) => ({
        payload: { ...infoWar, id: shortid() },
      }),
    },
    removeInfoWar: (state, action: PayloadAction<string>) =>
      state.filter(infoWar => infoWar.id !== action.payload),
    updateInfoWar: (state, action: PayloadAction<InfoWarStore>) =>
      state.map(infoWar =>
        infoWar.id === action.payload.id ? action.payload : infoWar,
      ),
  },
});

export default infoWarListSlice.reducer;

export const {
  addInfoWar,
  removeInfoWar,
  updateInfoWar,
} = infoWarListSlice.actions;
