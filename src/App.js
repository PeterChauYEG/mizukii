import React from 'react';
import heroo from './heroo.gif';
import './App.css';
import Button from './Button'

function App() {
  return (
    <div className="App">
      <div className="background-title">
        <h1 className="background-title-h1">
          ミズキイ
        </h1>
      </div>
      <header className="App-header">
        <img src={heroo} className="App-logo" alt="logo" />
        <div className="title">
          <h1 className="App-link">
            ミズキイ　アップ
          </h1>
        </div>
        <Button />
      </header>
    </div>
  );
}

export default App;
