import React, { useState,useEffect } from 'react'
import Layout from './Layout/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useCart } from './CartContext';


const Userauthordata = () => {
    const { addToCart } = useCart();
    const [data, setData] = useState([]);
    const { token } = useParams(); // Extract the 'token' parameter from the URL
  
    useEffect(() => {
      // Send the 'token' as a parameter in the GET request URL
      axios.get(`https://e-library-backend.onrender.com/authorBooks/${token}`)
        .then((res) => {
          setData(res.data.authorrBooks);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []); // Include 'token' in the dependency array to re-run the effect when it changes
  

    return (
        <Layout>
            <div>
                <div className='heading-book'>
                <h1>book</h1>
                <p>Browse the collection of our best top interresting Books. you will definitely find what you are looking for.</p>
                </div>

                <div>
                <div className="book">

{data.map((a) => (
    <div>
        <div class="cate-card">
            <img src={a.image} alt="Mountain" className='cate-img' />
            <div class="info">
                <h1 className='info-h1'>{a.bookName}</h1>
                <p className='info-p'>{a.bookDesc}</p>
                <button className='info-btn' onClick={() => addToCart(a)}>Add to cart</button>
            </div>
        </div>

    </div>
))}


</div>
                </div>
            </div>
        </Layout>
    )
}

export default Userauthordata