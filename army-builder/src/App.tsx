import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import ArmyList from './components/ArmyList/ArmyList';
import ListBuilder from './components/ListBuilder/ListBuilder';
import { AppDispatch } from './store';
import { loadData } from './store/appSlice';
import { RootState } from './store/rootReducer';

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch<AppDispatch>();
  const isError = useSelector((state: RootState) => state.app.error);

  const location = useLocation();

  useEffect(() => {
    dispatch(loadData()).then(() => {
      setLoading(false);
    });
  });

  if (loading || isError) {
    return null;
  }

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
