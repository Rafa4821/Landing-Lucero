// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product, action) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : item.quantity > 0 ? item.quantity - 1 : 0
            }
          : item
      ).filter(item => item.quantity > 0);
      setCart(updatedCart);
    } else if (action === 'increase') {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success(`${product.name} ${action === 'increase' ? 'agregado al carrito' : 'actualizado'}`);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    toast.info(`Producto eliminado del carrito.`);
  };

  const handleUpdateQuantity = (productId, action) => {
    const updatedCart = cart.map(item =>
      item.id === productId
        ? {
            ...item,
            quantity: action === 'increase' ? item.quantity + 1 : item.quantity > 0 ? item.quantity - 1 : 0
          }
        : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);

  return (
    <Router basename="/Landing-Lucero">
      <NavBar 
        cartItems={cart} 
        cartItemsCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        handleShowCart={handleShowCart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleUpdateQuantity={handleUpdateQuantity}
      />
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} cartItems={cart} />} />
        <Route path="/products" element={<Products onAddToCart={handleAddToCart} cartItems={cart} />} />
        <Route path="/products/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
