import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const titleSlice = createSlice({
  name: 'app',
  initialState: '',
  reducers: {
    changeTitle: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export default titleSlice.reducer;

export const { changeTitle } = titleSlice.actions;
