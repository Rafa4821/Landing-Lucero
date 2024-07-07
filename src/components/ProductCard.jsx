
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary" onClick={() => onAddToCart(product)}>
          <FaPlusCircle className="mr-2" /> Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
