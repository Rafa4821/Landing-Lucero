import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = ({ onAddToCart, onRemoveFromCart, cartItems }) => {
  return (
    <div className="container">
      <h1 className="my-4 main-title">Bienvenido a Mi Tienda!</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <ProductCard product={product} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} cartItems={cartItems} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
