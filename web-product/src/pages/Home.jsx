import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import storeLogo from '../image/fakeStore.png'

function Home() {
  return (
    <Container>
      <Box 
        sx={{ 
          textAlign: 'center', 
          padding: '50px 0', 
          backgroundColor: '#f0f4f7', 
          minHeight: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom>
          Bienvenidos a Fake Store
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', marginBottom: '20px' }}>
          Descubre nuestra increíble colección de productos de alta calidad para todas tus necesidades. ¡Explora y encuentra algo que te encante!
        </Typography>
        <Box 
          component="img"
          src={storeLogo} 
          alt="Imagen representativa de la tienda" 
          sx={{ 
            width: '80%', 
            maxWidth: '800px', 
            borderRadius: '10px', 
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            marginBottom: '30px'
          }}
        />
        <Button 
          variant="contained" 
          style={{ backgroundColor: '#a9c7b9' }}
          component={Link} 
          to="/products"
        >
          Ver Productos
        </Button>
      </Box>
    </Container>
  );
}

export default Home;