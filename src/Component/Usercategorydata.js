import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from './Layout/Layout';
import { useCart } from './CartContext';

const Usercategorydata = () => {
    const { addToCart } = useCart();
    const [data, setData] = useState([]);
    const { token } = useParams();
    useEffect(() => {
        axios.get(`https://e-library-backend.onrender.com/categoricalBooks/${token}`)
            .then((res) => {
                console.log(res.data.categoryBooks)
                setData(res.data.categoryBooks)
            }).catch((err) => {
                console.log(err)
            })
        }, [])

    return (
        <div>
            <Layout>
                <div>
                    <div className='heading-book'>
                        <h1>category book</h1>
                        <p>Browse the collection of our best top interresting Books. you will definitely find what you are looking for.</p>
                    </div>

                    <div>
                        <div className="book">

                            {data.map((cat) => (
                                <div>
                                    <div class="cate-card">
                                        <img src={cat.image} alt="Mountain" className='cate-img' />
                                        <div class="info">
                                            <h1 className='info-h1'>{cat.bookName}</h1>
                                            <p className='info-p'>{cat.bookDesc}</p>
                                            <button className='info-btn' onClick={() => addToCart(cat)}>Add to cart</button>
                                        </div>
                                    </div>

                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Usercategorydata