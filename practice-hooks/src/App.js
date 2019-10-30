import React from 'react';
import './App.css';
import Cars from './components/Cars'
import Dogs from './components/Dogs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hooks</h1>
        {/* <Cars/> */}
        <Dogs/>
      </header>
    </div>
  );
}

export default App;
