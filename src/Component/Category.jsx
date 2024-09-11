import React, { useEffect, useState } from 'react'
import Layout from './Layout/Layout';
import "../Styles/Category.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

const Category = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)

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
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file)
  }

  const categorySubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("categoryName", name);
    formData.append("categoryDesc", desc);
    formData.append("image", file);

    try {
      const response = await axios.post("https://e-library-backend.onrender.com/addCategory", formData);
      console.log('Category data submit successful', response.data);
      alert("successful")
    } catch (error) {
      console.log("error during submission ", error)
    }
  }
  return (
    <div>
      <Layout>


        <div className='w-3/4 m-auto main-div'>
          <div className='category-book-heading'>
            <h1>Books</h1>
            <p>Browse the collection of our best top interresting Books.
              you will definitely find what you are looking for.</p>
          </div>
          <hr />
          <div className="book">

            {data.map((e) => (
              <div>
                <div class="cate-card">
                  <img src={e.image} alt="Mountain" className='cate-img' />
                  <div class="info">
                    <h1 className='info-h1'>{e.categoryName}</h1>
                    <p className='info-p'>{e.categoryDesc}</p>
                    <Link to={`/categorydatapage/${e.token}`}>
                      <button className='info-btn'>Read More</button>
                    </Link>
                  </div>
                </div>

              </div>
            ))}


          </div>
          {/* <Link to="/category"> */}
          {/* <button className='latest-book-btn'>show latest book</button> */}
          {/* </Link> */}
        </div>
        <hr />
        <div className='admin-section'>
          <h1>Admin dashboard</h1>
          <form onSubmit={categorySubmit}>
            <label htmlFor="name">Category Name</label><br />
            <input type="text" name='name' value={name} placeholder='Category name' onChange={(e) => setName(e.target.value)} /> <br />
            <label htmlFor="desc">Description</label>
            <br />
            <input type="text" name="desc" value={desc} placeholder='description' onChange={(e) => setDesc(e.target.value)} />
            <br />
            <label htmlFor="image">Image</label>
            <br />
            <input type="file" name='image' accept='image/*' onChange={handleFileChange} />
            <br />
            <br />
            <button type='submit'>Submit</button>
          </form>
        </div>
      </Layout>
    </div>
  )
}


export default Category