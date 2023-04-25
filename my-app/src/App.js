import './App.css';
import React, { useEffect, useState } from 'react';

import AppRouter from './AppRouter';

function App() {

  const [backendData, setBackEndData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
        .then(data => { setBackEndData(data) })
  }, []);

  return (
    <div className="App">
      <AppRouter />

      <ul id='nav-list'>

        <li><a href="http://localhost:3000/home"> Home </a></li>

        <li><a href="http://localhost:3000/omoss"> Om oss </a></li>

        <li><a href="http://localhost:3000/mer"> Mer </a></li>

      </ul>

    </div>
  );
}

export default App;
