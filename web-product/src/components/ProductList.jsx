// src/components/ProductList.jsx

import React, { useState, useEffect } from 'react';

// Usaremos el estado para guardar los productos.
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect para manejar el efecto secundario de obtener datos de la API.
  useEffect(() => {
    // Esta función se ejecutará después de que el componente se renderice.
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los datos:", error);
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="product-list">
      <h2>Nuestros Productos</h2>
      <ul>
        {products.map(product => (
            <li key={product.id}>
            <img src={product.image} alt={product.title} width="100" />
            <h3>{product.title}</h3>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;