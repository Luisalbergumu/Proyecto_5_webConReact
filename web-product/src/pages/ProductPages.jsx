import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CategoryFilter from '../components/CategoryFilter';
import Container from '@mui/material/Container';

function ProductsPage() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setAllProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los datos:", error);
        setLoading(false);
      });
  }, []);


  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  
  const filteredProducts = selectedCategory
    ? allProducts.filter(product => product.category === selectedCategory)
    : allProducts;

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <Container style={{ backgroundColor: '#f0f4f7', minHeight: '100vh', padding: '20px' }}>
      <Box sx={{ flexGrow: 1, padding: 2 }}>
    
        <CategoryFilter onSelectCategory={handleCategoryChange} />

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {filteredProducts.map(product => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.title}
                  sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default ProductsPage;