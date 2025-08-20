
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductsPage from './pages/ProductPages'; 
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        
        <nav>
          <Link to="/">Inicio</Link> | <Link to="/products">Productos</Link>
        </nav>
        <hr />
        
        {/* Definición de las rutas */}
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<Home />} />
          
          {/* Ruta para la página de productos */}
          <Route path="/products" element={<ProductsPage />} />
          
          {/* Opcional: Ruta para manejar páginas no encontradas (404) */}
          <Route path="*" element={<h1>404: Página no encontrada</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;