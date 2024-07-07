import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <h1>{greeting}</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
