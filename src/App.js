import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="Page">
      <div className="Background">
        <h1>Untitled Fighting Game</h1>
        <Link to="/game">
          <button className="buttons"><p className="buttonText">Start (WIP)</p></button>
        </Link>
        <Link to="/settings">
          <button className="buttons"><p className="buttonText">Settings (WIP)</p></button>
        </Link>
        <button className="buttons"><p className="buttonText">Exit</p></button>
      </div>
    </div>
  );
}

export default App;
