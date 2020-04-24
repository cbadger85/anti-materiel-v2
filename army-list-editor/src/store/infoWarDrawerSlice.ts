import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InfoWarStore } from '../types/infoWar';
import { addInfoWar, updateInfoWar } from './infoWarList';

interface InfoWarDrawerStore {
  isOpen: boolean;
  selectedInfoWar?: InfoWarStore;
}

const initialState: InfoWarDrawerStore = {
  isOpen: false,
};

const infoWarDrawerSlice = createSlice({
  name: 'infoWarDrawer',
  initialState,
  reducers: {
    openAddInfoWarDrawer: state => {
      state.isOpen = true;

      return state;
    },
    openEditInfoWarDrawer: (state, action: PayloadAction<InfoWarStore>) => {
      state.isOpen = true;
      state.selectedInfoWar = action.payload;

      return state;
    },
    closeInfoWarDrawer: state => {
      state.isOpen = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(addInfoWar.type, state => {
      state.isOpen = false;

      return state;
    });
    builder.addCase(updateInfoWar.type, state => {
      state.isOpen = false;

      return state;
    });
  },
});

export default infoWarDrawerSlice.reducer;

export const {
  openAddInfoWarDrawer,
  openEditInfoWarDrawer,
  closeInfoWarDrawer,
} = infoWarDrawerSlice.actions;
