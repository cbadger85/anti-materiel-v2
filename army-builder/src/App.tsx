import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ArmyList from './components/ArmyList/ArmyList';
import { AppDispatch } from './store';
import { loadData } from './store/appSlice';
import AppBar from './components/AppBar/AppBar';

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
      <ArmyList />
    </div>
  );
}

export default App;
