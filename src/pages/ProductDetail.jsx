import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../data/firebaseConfig';
import '../styles/ProductDetail.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const ProductDetail = ({ onAddToCart, cartItems = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, 'productos', id);
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        setProduct({ id: productSnap.id, ...productSnap.data() });
      } else {
        navigate('/products');
      }
    };

    fetchProduct();
  }, [id, navigate]);

  useEffect(() => {
    const cartItem = cartItems.find(item => item.id === id);
    setQuantity(cartItem ? cartItem.quantity : 0);
  }, [cartItems, id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <div className="info">
        <img src={product.image} alt={product.name} />
        <h3 className="price">${product.price}</h3>
        <p className="description">{product.description}</p>
        <div className="embed-responsive embed-responsive-16by9 mb-4">
          <iframe
            className="embed-responsive-item"
            src={product.video}
            allowFullScreen
            title="Product Trailer"
          ></iframe>
        </div>
        <div className="quantity-controls">
          <ButtonGroup>
            <Button variant="secondary" onClick={() => onAddToCart(product, 'decrease')}>
              <FaMinusCircle />
            </Button>
            <Button variant="secondary" disabled>
              {quantity}
            </Button>
            <Button variant="primary" onClick={() => onAddToCart(product, 'increase')}>
              <FaPlusCircle />
            </Button>
          </ButtonGroup>
        </div>
        <div className="buttons mt-4">
          <Button className="secondary" onClick={() => navigate('/products')}>Regresar</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
