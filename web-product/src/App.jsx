import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ProductsPage from './pages/ProductPages';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: '#a9c7b9' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                Fake Store
              </Link>
            </Typography>
            {/* Inicio va primero */}
            <Button color="inherit">
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                Inicio
              </Link>
            </Button>
            {/* Productos va después */}
            <Button color="inherit">
              <Link to="/products" style={{ textDecoration: 'none', color: 'white' }}>
                Productos
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<h1>404: Página no encontrada</h1>} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;