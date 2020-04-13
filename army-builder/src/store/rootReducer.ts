import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import entryDataReducer from './entryDataSlice';
import entryListReducer from './entryListSlice';
import unitDataReducer from './unitDataSlice';
import weaponDataReducer from './weaponDataSlice';
import infoWarAttackDataReducer from './infoWarAttackDataSlice';

const rootReducer = combineReducers({
  app: appReducer,
  data: combineReducers({
    entries: entryDataReducer,
    units: unitDataReducer,
    weapons: weaponDataReducer,
    infoWarAttacks: infoWarAttackDataReducer,
  }),
  entries: entryListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
