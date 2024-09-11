import React, { useState,useEffect } from 'react'
import Layout from '../Component/Layout/Layout';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Userauthor() {
    const [data,setdata]=useState([])


    useEffect(() =>{
        axios.get("https://e-library-backend.onrender.com/addAuthor")
        .then((res) =>{
          console.log(res.data)
          const sortedData = res.data.data.sort((a, b) =>
          a.authorName.localeCompare(b.authorName)
          );
          setdata(sortedData);
        }).catch((err) =>{
          console.log(err)
        })
      }, [])
      
    
  return (
    <div>
      <Layout>
      <div className='author-name-heading'>
          <h1>AuthorPage</h1>
          <p>Browse the collection of our best top interresting Books.
            you will definitely find what you are looking for.</p>
        </div>
        <div class="author-container">
          {data.map((d) => (
            // <div key={d.authorName} className='authorcard'>
            //    <div className="image">
            //   <img src={d.image} alt="" width={"150px"} height={"150px"} />
            //   </div>
            //   <div className='content'>
            //   <h5 >{d.authorName}</h5>
            //   <p >{d.authorDesc}</p>
            //   </div>

              
            // </div>
            
            
            <div class="author-card">
                <div class="face face1">
                    <div class="content">
                        <img src={d.image}/>
                        {/* <h3>{d.authorName}</h3> */}
                    </div>
                </div>
                <div class="face face2">
                    <div class="content">
                    <h3>{d.authorName}</h3>
                        <p>{d.authorDesc}</p>
                        <Link className='a' to={`/userauthordata/${d.token}`}>
                             Read More
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

export default Userauthor
