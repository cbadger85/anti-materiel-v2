import { BaseRule } from '../types/rule';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const initialState: BaseRule[] = [];

const ruleListSlice = createSlice({
  name: 'ruleList',
  initialState,
  reducers: {
    addRule: {
      reducer: (state, action: PayloadAction<BaseRule>) => [
        ...state,
        action.payload,
      ],
      prepare: (rule: BaseRule) => ({
        payload: { ...rule, id: shortid() },
      }),
    },
    removeRule: (state, action: PayloadAction<string>) =>
      state.filter(rule => rule.id !== action.payload),
    updateRule: (state, action: PayloadAction<BaseRule>) =>
      state.map(rule =>
        rule.id === action.payload.id ? action.payload : rule,
      ),
  },
});

export default ruleListSlice.reducer;

export const { addRule, removeRule, updateRule } = ruleListSlice.actions;
