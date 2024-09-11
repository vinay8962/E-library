import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useCart } from '../CartContext';

const Layout = ({ children }) => {
  const { showNotification } = useCart();

  return (
    <div>
      <Header />
      <div className='content'>
        {children}
      </div>
      <Footer />
      {showNotification && (
        <div className='notification'>
          Item added to cart!
        </div>
      )}
    </div>
  );
};

export default Layout;
