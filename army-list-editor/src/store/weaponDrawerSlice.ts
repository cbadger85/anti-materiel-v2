import { WeaponStore } from '../types/weapon';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addWeapon, updateWeapon } from './weaponListSlice';

interface WeaponDrawerStore {
  isOpen: boolean;
  selectedWeapon?: WeaponStore;
}

const initialState: WeaponDrawerStore = {
  isOpen: false,
};

const weaponDrawerSlice = createSlice({
  name: 'weaponDrawer',
  initialState,
  reducers: {
    openAddWeaponDrawer: state => {
      state.isOpen = true;

      return state;
    },
    openEditWeaponDrawer: (state, action: PayloadAction<WeaponStore>) => {
      state.isOpen = true;
      state.selectedWeapon = action.payload;

      return state;
    },
    closeWeaponDrawer: state => {
      state.isOpen = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(addWeapon.type, state => {
      state.isOpen = false;

      return state;
    });
    builder.addCase(updateWeapon.type, state => {
      state.isOpen = false;

      return state;
    });
  },
});

export default weaponDrawerSlice.reducer;

export const {
  openAddWeaponDrawer,
  openEditWeaponDrawer,
  closeWeaponDrawer,
} = weaponDrawerSlice.actions;
