import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../data/firebaseConfig';
import '../styles/OrderConfirmation.css';

const OrderConfirmation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderRef = doc(db, 'orders', id);
        const orderSnap = await getDoc(orderRef);

        if (orderSnap.exists()) {
          setOrderData(orderSnap.data());
        } else {
          console.error('No se encontró la orden.');
        }
      } catch (error) {
        console.error('Error al obtener la orden:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchOrder();
    }
  }, [id]);

  if (loading) {
    return <div className="order-confirmation-container">Cargando...</div>;
  }

  if (!orderData) {
    return <div className="order-confirmation-container">No se encontró la orden.</div>;
  }

  return (
    <div className="order-confirmation-container">
      <h2>¡Tu pedido fue realizado con éxito!</h2>
      <p>Gracias por tu compra, <strong>{orderData.name}</strong>.</p>
      <p>ID de la orden: <strong>{id}</strong></p>

      <div className="order-confirmation-details">
        <h3>Detalles de la orden</h3>
        <ul>
          {orderData.items.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} />
              <span>{item.name} - {item.quantity} x ${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <p className="order-confirmation-total">
          <strong>Total: ${orderData.total.toFixed(2)}</strong>
        </p>
      </div>

      <div className="order-confirmation-address">
        <h3>Información de envío</h3>
        <p>Dirección: {orderData.address}</p>
        <p>Envío: {orderData.shipping}</p>
      </div>

      <button onClick={() => navigate('/')} className="btn-primary">
        Volver a la tienda
      </button>
    </div>
  );
};

export default OrderConfirmation;
