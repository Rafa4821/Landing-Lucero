import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const NavBar = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav>
      <h1>Mi Tienda</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div>
        <Link to="/cart">🛒 {totalItems}</Link>
      </div>
    </nav>
  );
};

export default NavBar;
