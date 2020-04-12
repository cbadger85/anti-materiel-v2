import { AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import ArmyList from './components/ArmyList/ArmyList';
import ListBuilder from './components/ListBuilder/ListBuilder';
import { getAllData } from './controllers/armyListController';
import { AppDispatch } from './store';
import { loadData } from './store/appSlice';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  useEffect(() => {
    dispatch(loadData(getAllData()));
  });

  return (
    <div className="App">
      <AppBar />
      <AnimatePresence exitBeforeEnter>
        <Switch key={location.key} location={location}>
          <Route path="/" exact>
            <ArmyList />
          </Route>
          <Route path="/builder/:sectorial" exact>
            <ListBuilder />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
