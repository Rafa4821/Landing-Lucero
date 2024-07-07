import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ({ cartItems, cartItemsCount, handleShowCart }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Mi Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <CartWidget 
            cartItems={cartItems} 
            cartItemsCount={cartItemsCount} 
            showCart={show} 
            handleCloseCart={handleClose} 
            handleShowCart={handleShow} 
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
