// Cart.js

import React from 'react';
import { useCart } from './CartContext';
import Layout from './Layout/Layout';
import { Link } from 'react-router-dom';
import "../Styles/Cart.css";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  console.log(cartItems)

  return (
    <Layout>
      <div>
        <div className='author-name-heading'>
          <h1>Cart</h1>
        </div>
        <div className='cart-table'>
          {cartItems.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Author Name</th>
                  <th>Description</th>
                  <th>Book Name</th>    
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td><img src={item.image} width={"100px"} alt="" /></td>

                    <td>{item.bookName}</td>
                    <td>{item.bookAuthorName}</td>
                    <td>{item.bookDesc}</td>
                    <td>
                      <button className="btn Login-btn" onClick={() => removeFromCart(index)}>Remove</button>/
                      <Link   to={`/buybook/${item.token}`}>
                             <button className="btn Login-btn">Buy</button>
                            </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Your cart is empty.</p>
          )}
          {cartItems.length > 0 && (
            <button className="btn Login-btn" onClick={clearCart}>Clear Cart</button>
          )}
        </div>
      </div>
      {/* <Link to="/CustomerId">
        <button className="btn Login-btn">Payment</button>
      </Link> */}
    </Layout>
  );
};

export default Cart;
