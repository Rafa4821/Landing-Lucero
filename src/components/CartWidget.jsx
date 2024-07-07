// src/components/CartWidget.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = ({ cartItemsCount }) => {
  return (
    <div className="text-white">
      <FaShoppingCart size={24} />
      <span className="ml-2">{cartItemsCount}</span>
    </div>
  );
};

export default CartWidget;
