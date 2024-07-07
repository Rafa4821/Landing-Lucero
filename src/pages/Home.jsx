import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home = ({ onAddToCart }) => {
  return (
    <Container>
      <h1 className="my-4">¡Bienvenido a Mi Tienda!</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
