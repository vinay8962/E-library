import React, { useState } from 'react';
import Layout from './Layout/Layout';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import "../Styles/buybook.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Buybook = () => {
  const { token } = useParams();
  const userToken = Cookies.get('useretoken');
  const [isBuying, setIsBuying] = useState(false);

  const handleBuy = async () => {
    if (isBuying) return;

    setIsBuying(true);

    try {
      const response = await axios.post('https://e-library-backend.onrender.com/buyBoook', {
        userToken: userToken,
        bookToken: token,
        // Add any other necessary data for the purchase
      });

      if (response.status === 200) {
        console.log('Book purchased successfully!');
        // Show a success notification
        toast.success('Book booked successfully!', { position: 'top-right', autoClose: 3000 });
      } else {
        console.error('Error purchasing book');
        // Show an error notification
        toast.error('Error booking the book. Please try again.', { position: 'top-right', autoClose: 3000 });
      }
    } catch (error) {
      console.error('Error:', error);
      // Show an error notification
      toast.error('An error occurred. Please try again later.', { position: 'top-right', autoClose: 3000 });
    } finally {
      setIsBuying(false);
    }
  };

  return (
    <Layout>
      <div className='buybook-container'>
        <div>
        <h1>Buy Book</h1>
        <div  className='buy-btn'>
        <button className="btn Login-btn" onClick={handleBuy} disabled={isBuying}>
          {isBuying ? 'Buying...' : 'Buy'}
        </button>
        
        <button className="btn Login-btn" disabled>
          Rent
        </button>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default Buybook;
