// src/components/ProductCard.jsx
import React from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onAddToCart, cartItems }) => {
  const cartItem = cartItems.find(item => item.id === product.id);

  return (
    <Card className="mb-4 product-card">
      <Card.Img variant="top" src={product.image} alt={product.name} className="product-image" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.platform}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="info" as={Link} to={`/products/${product.id}`}>
            Ver más
          </Button>
          <div>
            <ButtonGroup>
              <Button variant="secondary" onClick={() => onAddToCart(product, 'decrease')}>
                <FaMinusCircle />
              </Button>
              <Button variant="secondary" disabled>
                {cartItem ? cartItem.quantity : 0}
              </Button>
              <Button variant="primary" onClick={() => onAddToCart(product, 'increase')}>
                <FaPlusCircle />
              </Button>
            </ButtonGroup>
            <div className="mt-2">Cantidad en carrito: {cartItem ? cartItem.quantity : 0}</div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
