import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ({ cartItems, cartItemsCount, handleShowCart, handleRemoveFromCart, handleUpdateQuantity }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/proyecto-react-lucero.appspot.com/o/logo.png?alt=media&token=f12b7bd3-2017-44ca-8797-611828986579"
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
          {' '}Mi Tienda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Productos</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
          </Nav>
          <CartWidget 
            cartItems={cartItems} 
            cartItemsCount={cartItemsCount} 
            showCart={show} 
            handleCloseCart={handleClose} 
            handleShowCart={handleShow} 
            handleRemoveFromCart={handleRemoveFromCart}
            handleUpdateQuantity={handleUpdateQuantity}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
