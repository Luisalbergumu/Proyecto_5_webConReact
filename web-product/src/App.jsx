import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CategoryFilter from './components/CategoryFilter';
import './App.css';

function App() {
  
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="app-container">
      <h1>Fake Store</h1>
      <CategoryFilter onSelectCategory={handleCategoryChange} />
      <ProductList category={selectedCategory} />
    </div>
  );
}

export default App;