import React from 'react';
import { FaShoppingCart, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { Button, Modal, ButtonGroup } from 'react-bootstrap';

const CartWidget = ({ cartItems, cartItemsCount, showCart, handleCloseCart, handleShowCart, handleRemoveFromCart, handleAddToCart }) => {
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
                  <ButtonGroup className="ml-2">
                    <Button variant="secondary" size="sm" onClick={() => handleRemoveFromCart(item.id)}>
                      <FaMinusCircle />
                    </Button>
                    <Button variant="primary" size="sm" onClick={() => handleAddToCart(item)}>
                      <FaPlusCircle />
                    </Button>
                  </ButtonGroup>
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
