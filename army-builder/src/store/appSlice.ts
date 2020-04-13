import { createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllData } from '../controllers/armyListController';

export const loadData = createAsyncThunk('/data/loadData', async () => {
  const data = await getAllData();

  return data;
});

export const resetToDefault = createAction('*/resetToDefault');

interface AppState {
  error?: boolean;
}

const initialState: AppState = {};

const appSlice = createSlice({
  name: 'infoWarAttacks',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadData.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export default appSlice.reducer;
