
import React, { useState } from 'react';
import ItemListContainer from '../components/ItemListContainer';

const Home = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <ItemListContainer greeting="¡Bienvenido a Mi Tienda!" onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Home;
