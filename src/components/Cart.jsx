import React from 'react';

const Cart = ({ cartItems, handleRemoveFromCart }) => {
  return (
    <div className="container">
      <h1 className="my-4">Carrito</h1>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div className="row">
          {cartItems.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="card mb-4">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">${item.price}</p>
                  <p className="card-text">Cantidad: {item.quantity}</p>
                  <button className="btn btn-danger" onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
