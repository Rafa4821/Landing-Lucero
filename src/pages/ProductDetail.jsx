import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import '../styles/ProductDetail.css';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(prod => prod.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <div className="info">
        <img src={product.image} alt={product.name} />
        <h3 className="price">${product.price}</h3>
        <p className="description">{product.description}</p>
        <div className="embed-responsive embed-responsive-16by9 mb-4">
          <iframe
            className="embed-responsive-item"
            src={product.video}
            allowFullScreen
            title="Product Trailer"
          ></iframe>
        </div>
        <div className="buttons">
          <button onClick={() => onAddToCart(product)}>Agregar al carrito</button>
          <button className="secondary" onClick={() => navigate('/products')}>Regresar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
