import React, { useEffect, useState } from 'react'
import Layout from './Layout/Layout'
import '../Styles/Allbook.css';
import axios from 'axios';
import { useCart } from './CartContext';


const Userallbook = ({ product }) => {
    const [data, setData] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        axios.get("https://e-library-backend.onrender.com/allBooks")
            .then((res) => {
               
                setData(res.data.data);
                console.log(setData);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <>
            <Layout>
                <div>
                    <div className='heading-book'>
                        <h1>book</h1>
                        <p>Browse the collection of our best top interresting Books. you will definitely find what you are looking for.</p>
                    </div>
                    <div>
                        <div className="book">

                            {data.map((b) => (
                                <div>
                                    <div class="cate-card">
                                        <img src={b.image} alt="Mountain" className='cate-img' />
                                        <div class="info">
                                            <h1 className='info-h1'>{b.bookName}</h1>
                                            <p className='info-p'>{b.bookDesc}</p>
                                            <button className='info-btn' onClick={() => addToCart(b)}>Add to cart</button>
                                        </div>
                                    </div>

                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Userallbook;