import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllData } from '../controllers/armyListController';

export const loadData = createAsyncThunk('*/loadData', async () => {
  return await getAllData();
});

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
