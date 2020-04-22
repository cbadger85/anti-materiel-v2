import ammoReducer from './ammoSlice';
import entryReducer from './entrySlice';
import infoWarReducer from './infoWar';
import ruleReducer from './ruleSlice';
import weaponReducer from './weaponSlice';
import appReducer from './appSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  ammo: ammoReducer,
  entries: entryReducer,
  infoWar: infoWarReducer,
  rules: ruleReducer,
  weapons: weaponReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
