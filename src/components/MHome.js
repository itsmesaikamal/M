import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import MNavbar from './MNavbar'; // Ensure correct import
import MProducts from './MProducts'; // Ensure correct import
import MOrders from './MOrders'; // Ensure correct import
import MInvoice from './MInvoice'; // Ensure correct import
import MAccounts from './MAccounts'; // Ensure correct import
import MCart from './MCart'; // Ensure correct import
import { db } from './Mfirebase';
import { collection, getDocs } from 'firebase/firestore';
import './MHome.css';

const MHome = () => {
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartCount = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const cartItems = querySnapshot.docs.filter(doc => doc.data().inCart);
      setCartCount(cartItems.length);
    };

    fetchCartCount();
  }, []);

  const handleAddToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="home-container">
      <MNavbar />
      <div className="main-content">
        <div className="top-bar">
          <FontAwesomeIcon 
            icon={faShoppingCart} 
            className="cart-icon" 
            onClick={() => navigate('/home/cart')}
          />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
        <Routes>
          <Route path="products/*" element={<MProducts onAddToCart={handleAddToCart} />} />
          <Route path="orders/*" element={<MOrders />} />
          <Route path="invoice" element={<MInvoice />} />
          <Route path="accounts" element={<MAccounts />} />
          <Route path="cart" element={<MCart />} /> 
        </Routes>
      </div>
    </div>
  );
};

export default MHome;
