
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Página de Inicio</h2>
      <p>Bienvenido a nuestra tienda. ¡Explora nuestros productos!</p>
      <Link to="/products">Ver Productos</Link>
    </div>
  );
}

export default Home;