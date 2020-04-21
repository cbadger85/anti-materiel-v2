import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  title: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;

      return state;
    },
  },
});

export default appSlice.reducer;

export const { changeTitle } = appSlice.actions;
