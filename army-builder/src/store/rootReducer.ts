import { combineReducers } from '@reduxjs/toolkit';
import appReducer from './appSlice';
import entryReducer from './entrySlice';
import unitReducer from './unitSlice';
import weaponReducer from './weaponSlice';
import infoWarAttackReducer from './infoWarAttackSlice';

const rootReducer = combineReducers({
  app: appReducer,
  entries: entryReducer,
  units: unitReducer,
  weapons: weaponReducer,
  infoWarAttacks: infoWarAttackReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
