import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadData } from './store/appSlice';
import { AppDispatch } from './store';
import { RootState } from './store/rootReducer';

function App() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const image = useSelector((state: RootState) => state.entries?.[0]?.image);

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
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
