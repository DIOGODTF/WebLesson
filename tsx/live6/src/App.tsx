import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Private } from './pages/Private';
import { AuthRequire } from './contexts/Auth/AuthRequire';
import { useContext } from 'react';
import { AuthContext } from './contexts/Auth/AuthContext';

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
      await auth.signout();
      //faz refresh no navegador...
      window.location.href = window.location.href;
      //navigate('/'); 
  };
  return (
    <div className="App">
        <header>
          <h1>Header do site</h1>
          <nav>
            <Link to = '/'>Home</Link>
            <Link to = '/private'>Página Privada</Link>
            { auth.user && <button onClick={handleLogout}>Sair</button> }
          </nav>
        </header>
        <hr/>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/private' element={ <AuthRequire><Private/></AuthRequire> } />
           
        </Routes>

    </div>
  );
}

export default App;
