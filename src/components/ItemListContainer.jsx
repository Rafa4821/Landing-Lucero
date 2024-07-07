
import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const ItemListContainer = ({ greeting, onAddToCart }) => {
  return (
    <div className="container">
      <h1 className="my-4 text-center">{greeting}</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
