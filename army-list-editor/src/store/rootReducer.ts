import ammoReducer from './ammoSlice';
import entryReducer from './entrySlice';
import infoWarAttackReducer from './infoWarAttackSlice';
import ruleReducer from './ruleSlice';
import weaponReducer from './weaponSlice';
import appReducer from './appSlice';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  ammo: ammoReducer,
  entries: entryReducer,
  infoWarAttacks: infoWarAttackReducer,
  rules: ruleReducer,
  weapons: weaponReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
