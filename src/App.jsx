// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success(`${product.name} added to cart!`);
    setShow(true); // Mostrar carrito al agregar producto
  };

  const handleCloseCart = () => setShow(false);
  const handleShowCart = () => setShow(true);

  return (
    <Router basename="/Landing-Lucero">
      <NavBar cartItems={cart} cartItemsCount={cart.reduce((acc, item) => acc + item.quantity, 0)} showCart={handleShowCart} handleCloseCart={handleCloseCart} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
