import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../Component/Layout/Layout';
import '../Styles/Athorpage.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const AuthorPage = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("")
  const [file, setfile] = useState(null)
  const [desc, setDesc] = useState("")

const token =useParams()


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setfile(file);
  };

  useEffect(() => {
    axios.get("https://e-library-backend.onrender.com/addAuthor")
      .then((res) => {
        console.log(res.data)
        const sortedData = res.data.data.sort((a, b) =>
          a.authorName.localeCompare(b.authorName)
        );
        setData(sortedData);
      }).catch((err) => {
        console.log(err)
      })
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("authorName", name);
    formData.append("authorDesc", desc);
    formData.append("image", file);

    try {
      // Make a POST request to the API
      const response = await axios.post("https://e-library-backend.onrender.com/addAuthor", formData);
      console.log('Detail Submit successful:', response.data);
      alert("ok");
      // Redirect to another page or perform any additional actions as needed.
    } catch (error) {
      console.log('Error during submission:', error);
    }
  };


  return (
    <div>
      <Layout>
        <div className='author-name-heading'>
          <h1>AuthorPage</h1>
          <p>Browse the collection of our best top interresting Books.
            you will definitely find what you are looking for.</p>
        </div>
        <hr />
        {/* <div className="author"> */}
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
                        <Link className='a' to={`/authordatapage/${d.token}`}>
                             Read More
                            </Link>
                    </div>
                </div>
            </div>
            
            
          ))}
          </div>
        {/* </div> */}
        <hr />
        <div className="admin-section">
          <h1>Admin section</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Author Name</label>
            <br />
            <input type="text" name='name' value={name} placeholder='Author name' onChange={(e) => setName(e.target.value)} />
            <br />
            <label htmlFor="desc">Description</label>
            <br />
            <input type="text" name="desc" value={desc} placeholder='description' onChange={(e) => setDesc(e.target.value)} />
            <br />
            <label htmlFor="image">Author Image</label>
            <input type="file" name='image' accept='image/*' onChange={handleFileChange} />
            <br />
            <br />
            <button type='submit'>Submit</button>
          </form>
        </div>


        {/* <div className="admin-section">
          <h1>Admin section</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Author Name</label>
            <input type="text" name='name' value={name} placeholder='Author name' onChange={(e) => setname(e.target.value)} />
            <label htmlFor="desc">Description</label>
            <input type="text" name="desc" value={desc} placeholder='description' onChange={(e) => setdesc(e.target.value)} />
            <label htmlFor="file">Author Image</label>
            <input type="file" name='image' accept='image/*' value={file} onChange={(e) => setfile(e.target.value)} placeholder='image' />
            <br />
            <br />
            <button type='submit'>Submit</button>
          </form>
        </div> */}
      </Layout>
    </div>
  );
};


export default AuthorPage;
