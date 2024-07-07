import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="card h-100">
      <img src={product.imageUrl} className="card-img-top" alt={product.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ${product.price.toFixed(2)}</p>
        <Link to={`/product/${product.id}`} className="btn btn-primary mt-auto">View Details</Link>
      </div>
    </div>
  );
};

export default ProductCard;
