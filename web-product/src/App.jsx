// src/App.jsx

import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CategoryFilter from './components/CategoryFilter';
import './App.css';

function App() {
  // Estado para la categoría seleccionada.
  const [selectedCategory, setSelectedCategory] = useState('');

  // Función que actualiza el estado cuando se selecciona una categoría.
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app-container">
      <h1>Fake Store</h1>
      {/* Pasamos la función al componente hijo. */}
      <CategoryFilter onSelectCategory={handleCategoryChange} />
      {/* Pasamos el estado de la categoría como prop al componente hijo. */}
      <ProductList category={selectedCategory} />
    </div>
  );
}

export default App;