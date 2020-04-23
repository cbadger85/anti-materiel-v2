import ammoReducer from './ammoSlice';
import entryReducer from './entrySlice';
import infoWarReducer from './infoWar';
import ruleReducer from './ruleSlice';
import weaponReducer from './weaponSlice';
import titleReducer from './titleSlice';
import { combineReducers } from '@reduxjs/toolkit';
import weaponDrawerReducer from './weaponDrawerSlice';
import infoWarDrawerReducer from './infoWarDrawerSlice';

const rootReducer = combineReducers({
  ammo: ammoReducer,
  entries: entryReducer,
  infoWar: infoWarReducer,
  rules: ruleReducer,
  weapons: weaponReducer,
  app: combineReducers({
    title: titleReducer,
    weaponDrawer: weaponDrawerReducer,
    infoWarDrawer: infoWarDrawerReducer,
  }),
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
