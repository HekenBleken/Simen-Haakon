import './App.css';
import React from 'react';

import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">

<AppRouter />

    <ul id='nav-list'>

      <li><a href="http://localhost:3000/hjem"> Hjem </a></li>

      <li><a href="http://localhost:3000/omoss"> Om oss </a></li>

      <li><a href="http://localhost:3000/mer"> Mer </a></li>

    </ul>

    </div>
  );
}

export default App;
