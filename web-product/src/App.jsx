
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<h1>404: Página no encontrada</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;