// src/components/ProductList.jsx
    
import React, { useState, useEffect } from 'react';

// El componente recibe la prop `category` desde el padre (App.jsx).
function ProductList({ category }) {
  // Estado para almacenar todos los productos obtenidos de la API.
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect para la llamada inicial a la API. Se ejecuta solo una vez.
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setAllProducts(data); // Guardamos todos los productos
        setLoading(false);
      })
      .catch(error => {
        console.error("Hubo un error al obtener los datos:", error);
        setLoading(false);
      });
  }, []); // Array de dependencias vacío para que se ejecute una sola vez.

  // Filtramos los productos según la categoría seleccionada.
  // Esto se recalcula cada vez que `allProducts` o `category` cambian.
  const filteredProducts = category
    ? allProducts.filter(product => product.category === category)
    : allProducts;

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="product-list">
      <h2>Productos</h2>
      <ul>
        {filteredProducts.map(product => (
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