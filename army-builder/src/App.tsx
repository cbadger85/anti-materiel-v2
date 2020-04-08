import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getAllData } from './controllers/armyListController';

function App() {
  const handleClick = async () => {
    getAllData().then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={handleClick}>click here</button>
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
