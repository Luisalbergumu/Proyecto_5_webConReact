
    
import React, { useState } from 'react';

function CategoryFilter({ onSelectCategory }) {
  const [category, setCategory] = useState('');

  const handleSelect = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    onSelectCategory(selectedCategory);
  };

  return (
    <div className="filter-container">
      <h3>Filtrar por categoría:</h3>
      <select value={category} onChange={handleSelect}>
        <option value="">Todas las categorías</option>
        <option value="electronics">Electrónica</option>
        <option value="jewelery">Joyería</option> 
        <option value="men's clothing">Ropa de hombre</option>
        <option value="women's clothing">Ropa de mujer</option>
      </select>
    </div>
  );
}

export default CategoryFilter;