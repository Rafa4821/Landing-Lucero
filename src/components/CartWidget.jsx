import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Button, Modal } from 'react-bootstrap';

const CartWidget = ({ cartItems, cartItemsCount, showCart, handleCloseCart, handleShowCart, handleRemoveFromCart, handleAddToCart, handleDecreaseQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Button variant="dark" onClick={handleShowCart}>
        <FaShoppingCart size={24} />
        <span className="ml-2">{cartItemsCount}</span>
      </Button>

      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Carro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p>El carrito está vacío</p>
          ) : (
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>
                  {item.name} - {item.quantity} x ${item.price}
                  <div className="d-flex align-items-center">
                    <Button variant="secondary" size="sm" onClick={() => handleDecreaseQuantity(item.id)}>-</Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button variant="secondary" size="sm" onClick={() => handleAddToCart(item)}>+</Button>
                    <Button variant="danger" size="sm" onClick={() => handleRemoveFromCart(item.id)}>Eliminar</Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div>Total: ${total.toFixed(2)}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartWidget;
