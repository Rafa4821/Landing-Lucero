import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../data/firebaseConfig';
import '../styles/ProductDetail.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

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
        const fetchedProduct = { id: productSnap.id, ...productSnap.data() };
        setProduct(fetchedProduct);
        
        const cartItem = cartItems.find(item => item.id === fetchedProduct.id);
        setQuantity(cartItem ? cartItem.quantity : 0);
      } else {
        navigate('/products');
      }
    };

    fetchProduct();
  }, [id, cartItems, navigate]);

  const handleAddToCart = async (action) => {
    if (!product) return;

    if (action === 'increase') {
      if (quantity < product.stock) {
        onAddToCart(product, 'increase');
        setQuantity(quantity + 1);

        // Reducir stock en Firestore
        const productRef = doc(db, 'productos', id);
        await updateDoc(productRef, {
          stock: product.stock - 1
        });
        setProduct(prev => ({ ...prev, stock: prev.stock - 1 }));
      } else {
        toast.error("No hay suficiente stock disponible.");
      }
    } else if (action === 'decrease') {
      if (quantity > 0) {
        onAddToCart(product, 'decrease');
        setQuantity(quantity - 1);

        // Aumentar stock en Firestore
        const productRef = doc(db, 'productos', id);
        await updateDoc(productRef, {
          stock: product.stock + 1
        });
        setProduct(prev => ({ ...prev, stock: prev.stock + 1 }));
      } else {
        toast.error("No hay productos en el carrito para remover.");
      }
    }
  };

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
            <Button variant="secondary" onClick={() => handleAddToCart('decrease')}>
              <FaMinusCircle />
            </Button>
            <Button variant="secondary" disabled>
              {quantity}
            </Button>
            <Button variant="primary" onClick={() => handleAddToCart('increase')}>
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
