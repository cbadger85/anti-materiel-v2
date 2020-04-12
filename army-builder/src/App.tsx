import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import ArmyList from './components/ArmyList/ArmyList';
import { AppDispatch } from './store';
import { loadData } from './store/appSlice';
import ListBuilder from './components/ListBuilder/ListBuilder';

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    dispatch(loadData()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);

  if (loading) {
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
