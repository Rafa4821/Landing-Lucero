import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onAddToCart, cartItems }) => {
  const cartItem = cartItems.find(item => item.id === product.id);

  return (
    <Card className="mb-4 product-card">
      <Card.Img variant="top" src={product.image} alt={product.name} className="product-image" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="info" as={Link} to={`/products/${product.id}`}>
            Ver más
          </Button>
          <Button variant="primary" onClick={() => onAddToCart(product)}>
            <FaPlusCircle className="mr-2" /> Agregar
          </Button>
        </div>
        {cartItem && <p className="mt-2">Cantidad en carrito: {cartItem.quantity}</p>}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
