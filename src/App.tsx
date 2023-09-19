import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './pages/Home/index';
import { Private } from './pages/Private/index';
import { RequireAuth } from './contexts/Auth/RequireAuth';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Header do Site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/private">Página Privada</Link>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/private" element={<RequireAuth><Private /></RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
