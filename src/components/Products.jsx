import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const Products = () => {
  const { addToCart } = useCart();

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
