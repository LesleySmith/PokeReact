import React from 'react';
import Pokemon from './Pokemon.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Pokedex App
        </p>
      </header>
      <Pokemon />
    </div>
  );
}

export default App;
