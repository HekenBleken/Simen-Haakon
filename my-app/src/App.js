import './App.css';
import './Navbar.css';
import Navbar from './Navbar';

import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
<AppRouter />

    <ul id='nav-list'>

      <li><a href="http://localhost:3000/home"> Hjem </a></li>

      <li><a href="http://localhost:3000/omoss"> Om oss </a></li>

      <li><a href="http://localhost:3000/mer"> Mer </a></li>

    </ul>

    </div>
  );
}

export default App;
