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

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    toast.success(`${product.name} agregado al carrito!`);
    setShowCart(true);
  };

  const handleRemoveFromCart = (productId) => {
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct && existingProduct.quantity > 1) {
      setCart(cart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      const updatedCart = cart.filter(item => item.id !== productId);
      setCart(updatedCart);
      toast.info('Producto eliminado del carrito.');
    }
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
        handleAddToCart={handleAddToCart}
      />
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} cartItems={cart} />} />
        <Route path="/products" element={<Products onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} cartItems={cart} />} />
        <Route path="/products/:id" element={<ProductDetail onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} cartItems={cart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;
