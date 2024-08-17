import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import FilterButtons from '../components/FilterButtons';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../data/firebaseConfig';
import '../styles/Home.css';

const Home = ({ onAddToCart, cartItems }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, 'productos');
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(productsList);
      setFilteredProducts(productsList);
    };

    fetchProducts();
  }, []);

  const handleFilter = (platform) => {
    if (platform === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.platform === platform));
    }
  };

  return (
    <Container>
      <h1 className="my-4 main-title">Bienvenido a Mi Tienda!</h1>
      <div className="filter-buttons">
        <FilterButtons handleFilter={handleFilter} />
      </div>
      <Row>
        {filteredProducts.map(product => (
          <Col key={product.id} sm={6} md={4} lg={3}>
            <ProductCard
              product={product}
              onAddToCart={onAddToCart}
              cartItems={cartItems}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
