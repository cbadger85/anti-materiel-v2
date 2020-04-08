import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { loadData } from './store/appSlice';
import { AppDispatch } from './store';

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
