import React from 'react';
import ProductList from './ProductList';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <h1>{greeting}</h1>
      <ProductList />
    </div>
  );
};

export default ItemListContainer;
