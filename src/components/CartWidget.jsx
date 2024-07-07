import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartWidget = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart" className="btn btn-outline-light">
      <FaShoppingCart /> {totalItems}
    </Link>
  );
};

export default CartWidget;
