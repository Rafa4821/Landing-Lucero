import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CartWidget = ({ cartItems, cartItemsCount, showCart, handleCloseCart, handleShowCart, handleRemoveFromCart, handleAddToCart, handleUpdateQuantity }) => {
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleIncrease = (item) => {
    if (item.quantity < item.stock) {
      handleAddToCart(item, 'increase');
    } else {
      toast.error("No hay suficiente stock disponible.");
    }
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      handleUpdateQuantity(item.id, 'decrease');
    } else {
      handleRemoveFromCart(item.id);
    }
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout');
      handleCloseCart();
    } else {
      toast.error("El carrito está vacío. Añade productos antes de proceder al checkout.");
    }
  };

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
                  {item.name} - {item.quantity} x ${item.price.toFixed(2)}
                  <div className="d-flex align-items-center">
                    <Button variant="secondary" size="sm" onClick={() => handleDecrease(item)}>-</Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button variant="secondary" size="sm" onClick={() => handleIncrease(item)}>+</Button>
                    <Button variant="danger" size="sm" onClick={() => handleRemoveFromCart(item.id)}>Eliminar</Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div>Total: ${total.toFixed(2)}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCheckout}>
            Finalizar Compra
          </Button>
          <Button variant="secondary" onClick={handleCloseCart}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartWidget;

