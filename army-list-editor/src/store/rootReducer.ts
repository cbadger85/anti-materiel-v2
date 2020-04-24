import ammoListReducer from './ammoListSlice';
import entryListReducer from './entryListSlice';
import infoWarListReducer from './infoWarList';
import ruleListReducer from './ruleListSlice';
import weaponListReducer from './weaponListSlice';
import titleReducer from './titleSlice';
import { combineReducers } from '@reduxjs/toolkit';
import weaponDrawerReducer from './weaponDrawerSlice';
import infoWarDrawerReducer from './infoWarDrawerSlice';
import entryFormModeReducer from './entryFormModeSlice';
import entryFormReducer from './EntryFormSlice';

const rootReducer = combineReducers({
  ammo: ammoListReducer,
  entries: entryListReducer,
  infoWar: infoWarListReducer,
  rules: ruleListReducer,
  weapons: weaponListReducer,
  entryForm: entryFormReducer,
  app: combineReducers({
    title: titleReducer,
    weaponDrawer: weaponDrawerReducer,
    infoWarDrawer: infoWarDrawerReducer,
    isEntryFormMode: entryFormModeReducer,
  }),
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
