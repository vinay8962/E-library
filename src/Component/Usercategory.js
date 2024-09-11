import React, { useState,useEffect } from 'react'
import Layout from '../Component/Layout/Layout';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Usercategory() {
    const [data,setData]=useState([])
    useEffect(() => {
        axios.get("https://e-library-backend.onrender.com/addCategory")
          .then((res) => {
            // Sort the data alphabetically based on the 'categoryName' property
            const sortedData = res.data.data.sort((a, b) =>
              a.categoryName.localeCompare(b.categoryName)
            );
    
            setData(sortedData);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
  return (
    <div>
      <Layout>
      <div className='category-book-heading'>
            <h1>Books</h1>
            <p>Browse the collection of our best top interresting Books.
              you will definitely find what you are looking for.</p>
          </div>
          <div className="book">

{data.map((e) => (
    <div>
<div class="cate-card">
  <img src={e.image} alt="Mountain" className='cate-img'/>
  <div class="info">
      <h1 className='info-h1'>{e.categoryName}</h1>
      <p className='info-p'>{e.categoryDesc}</p>
      <Link to={`/usercategorydata/${e.token}`}>
      <button className='info-btn'>Read More</button>
      </Link>
  </div>
</div>

    </div>
  ))}


</div>
      </Layout>
    </div>
  )
}

export default Usercategory
