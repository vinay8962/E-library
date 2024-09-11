import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Cookies from 'js-cookie';
import "../Styles/PaymentForm.css"
import Card from 'react-credit-cards'


const stripePromise = loadStripe('pk_test_51MgnFSSG27nKZ7VItx6iJhR4q2mClHnMRjs9IU8ARIIArZS64BFI7AZ9uLvDB1ycdIewQBtBVNloOkPR1fBjjgxu00g8744D8X');

const PaymentForm = () => {
  const [cardName, setCardName] = useState('');
  const [stripe, setStripe] = useState(null);
  const [cardNumberElement, setCardNumberElement] = useState(null);
  const [cardExpiryElement, setCardExpiryElement] = useState(null);
  const [cardCvcElement, setCardCvcElement] = useState(null);
  const customerID = Cookies.get('customerID');
  console.log(customerID)

  useEffect(() => {
    // Initialize Stripe only on the client side
    const initializeStripe = async () => {
      const stripeInstance = await stripePromise;
      setStripe(stripeInstance);

      const elements = stripeInstance.elements();

      const cardNumber = elements.create('cardNumber', {
        style: { fontSize: '16px', color: '#32325d' },
      });
      cardNumber.mount('#card-number');
      setCardNumberElement(cardNumber);

      const cardExpiry = elements.create('cardExpiry', {
        style: { fontSize: '16px', color: '#32325d' },
      });
      cardExpiry.mount('#card-expiry');
      setCardExpiryElement(cardExpiry);

      const cardCvc = elements.create('cardCvc', {
        style: { fontSize: '16px', color: '#32325d' },
      });
      cardCvc.mount('#card-cvc');
      setCardCvcElement(cardCvc);
    };

    initializeStripe();

    // Clean up on component unmount
    return () => {
      if (cardNumberElement) cardNumberElement.destroy();
      if (cardExpiryElement) cardExpiryElement.destroy();
      if (cardCvcElement) cardCvcElement.destroy();
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!stripe || !cardNumberElement || !cardExpiryElement || !cardCvcElement) {
        throw new Error('Stripe.js has not loaded yet.');
      }

      const { token, error } = await stripe.createToken(cardNumberElement);

      if (error) {
        console.error(error.message);
      } else {
        submitPayment(token.id);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  const submitPayment = (token) => {
    // Send the token to your server
    // You can use a library like Axios or fetch to make an HTTP request
    // Example using fetch:
    fetch('https://e-library-backend.onrender.com/cartSecondStep', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        customer_id: customerID, // Replace with your actual customer ID
        card_token: token,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <><div className='form-payment' >
  
    <div>
    <ol class="steps">
  <li class="step is-complete" data-step="1">
  Customer ID
  </li>
  <li class="step is-active" data-step="2">
  <h3>Payment form</h3>
  </li>
  <li class="step" data-step="3">
    Step 3
  </li>
</ol>
    </div>
    </div>
    <div className='payment_form'>
    <form id="payment-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className='pay-label' htmlFor="card-name">Cardholder Name</label>
        <input
        style={{height:"40px",padding:"0 5px"}}
        className='w-100'
          type="text"
          id="card-name"
          placeholder='Cardholder Name'
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className='pay-label' htmlFor="card-number">Card Number</label>
        <div id="card-number" style={{ width: '100%' }}></div>
      </div>
      <div className="form-group">
        <label className='pay-label' htmlFor="card-expiry">Expiry Date</label>
        <div id="card-expiry" style={{ width: '100%' }}></div>
      </div>
      <div className="form-group">
        <label className='pay-label' htmlFor="card-cvc">CVC</label>
        <div id="card-cvc" style={{ width: '100%' }}></div>
      </div>
      <div className='btn-pay'>
      <button className='w-100 btn btn-warning' type="submit" id="submit-button">
        Submit Payment
      </button>
      </div>
    </form>
    </div>
   
    </>
  );
};

export default PaymentForm;
