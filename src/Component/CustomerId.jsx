import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import "../Styles/CustomerID.css";



const CustomerId = () => {
  const Navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Name:', name);
    console.log('Email:', email);

    try {
      const response = await axios.post('https://e-library-backend.onrender.com/cartFirstStep', {
        name,
        email,
      });

      const customerID = response.data.customer.id;
      // Set the customer ID in cookies with a 10-minute expiration time
      Cookies.set('customerID', customerID, { expires: 10 / (24 * 60) }); // expires is in days


      console.log(response.data); // Handle the response as needed
      alert('Successful');
      Navigate("/Payment")
    } catch (error) {
      console.error('Error sending data:', error.message); // log the error message

    }
  };

  return (
    <>
      <div className='customer-id-form'>

        <div>
          <ol class="steps">
            <li class="step is-active" data-step="1">
              <h3>Customer ID</h3>
            </li>
            <li class="step" data-step="2">
              Payment form
            </li>
            <li class="step" data-step="3">
              Step 3
            </li>
          </ol>
        </div>
      </div>
      <div className='form_center'>
        <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="name">Name</label>
          <input className='w-100 customer-input' placeholder='name...' type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <br />
          <div className='form-group'>
          <label htmlFor="email">Email</label>
          <input className='w-100 customer-input' placeholder='email...' type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <br />
          <br />
          <div className='btn-login'>
          
            <button className='w-100 btn btn-warning' type="submit">Send</button>
          
          </div>
          {/* Consider adding content to the Link component */}

        </form>
        </div>
      
    </>
  );
};

export default CustomerId;
