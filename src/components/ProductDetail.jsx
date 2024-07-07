import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail-container">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
