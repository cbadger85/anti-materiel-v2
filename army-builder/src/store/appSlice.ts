import { createAction, createSlice } from '@reduxjs/toolkit';
import { AllData } from '../controllers/armyListController';

export const loadData = createAction<AllData>('*/loadData');

interface AppState {
  error?: boolean;
}

const initialState: AppState = {};

const appSlice = createSlice({
  name: 'infoWarAttacks',
  initialState,
  reducers: {},
});

export default appSlice.reducer;
