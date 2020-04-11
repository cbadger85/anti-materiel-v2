import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ArmyList from './components/ArmyList/ArmyList';
import { AppDispatch } from './store';
import { loadData } from './store/appSlice';
import AppBar from './components/AppBar/AppBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page from './components/Page/Page';

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

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
      <Router>
        <Switch>
          <Route path="/" exact>
            <ArmyList />
          </Route>
          <Route path="/sectorial/:sectorial" exact>
            <Page>
              <div>Sectorial</div>
            </Page>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
