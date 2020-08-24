import React from 'react';
import heroo from './heroo.gif';
import './App.css';
import Button from './Button'

function App() {
  return (
    <div className="App">
      <div className="background-title">
        <h1>
          ミズキイ
        </h1>
      </div>
      <div className="background-marquee">
        <marquee direction="down">
          <p>
            ミズキイ・ミズキイ・ミズキイ・ミズキイ・ミズキイ・ミズキイ・ミズキイ・ミズキイ・ミズキイ・ミズキイ・ミズキイ
          </p>
        </marquee>
      </div>
      <div className="content">
        <img src={heroo} className="heroo" />
        <div className="title-container">
          <h1>
            ミズキイ　アップ
          </h1>
        </div>
        <Button />
      </div>
    </div>
  );
}

export default App;
