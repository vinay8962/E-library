import React, { useEffect, useState } from 'react';
import Layout from './Layout/Layout';
import axios from 'axios';
import "../Styles/Admin.css";

const Admin = () => {
  const [authordata, setAuthorData] = useState([]);
  const [categorydata, setCategoryData] = useState([]);
  const [authorName, setAuthorName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [bookName, setBookName] = useState('');
  const [bookDesc, setBookDesc] = useState('');
  const [file, setFile] = useState(null);
  const [pdffile, setPdfFile] = useState(null);
  const [authorToken, setAuthorToken] = useState(''); // Add state for author token
  const [categoryToken, setCategoryToken] = useState(''); // Add state for category token

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setPdfFile(file)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('bookAuthorName', authorName);
    formData.append('bookCategoryName', categoryName);
    formData.append('bookName', bookName);
    formData.append('bookDesc', bookDesc);
    formData.append('image', file);
    formData.append('bookFile', pdffile)
    formData.append('bookAuthorToken', authorToken); // Add author token to the form data
    formData.append('bookCategoryToken', categoryToken); // Add category token to the form data

    try {
      const response = await axios.post('https://e-library-backend.onrender.com/addBooks', formData);
      console.log('Detail Submit successful:', response.data);
      alert('Book added successfully');
    } catch (error) {
      console.error('Error during submission:', error);
      alert('Error adding the book');
    }
  };

  useEffect(() => {
    axios.get('https://e-library-backend.onrender.com/addAuthor')
      .then((res) => {
        setAuthorData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios.get('https://e-library-backend.onrender.com/addCategory')
      .then((res) => {
        setCategoryData(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Layout>
     

      <section className="contact_us body">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-10">
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <h3>Admin</h3>
                        <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                        <form action="" onSubmit={handleSubmit} >
                        <label className='label'>Author Name</label>
                        <select className='select' onChange={(e) => {
                          const [authorName, authorToken] = e.target.value.split('|');
                          setAuthorName(authorName);
                          setAuthorToken(authorToken);
                        }}>
                          {authordata.map((d) => (
                            <option key={d.authorId} value={`${d.authorName}|${d.token}`}>
                              {d.authorName}
                            </option>
                          ))}
                        </select>
                        <br />
                        <label className='label'>Category name</label>
                        <select className='select' onChange={(e) => {
                          const [categoryName, categoryToken] = e.target.value.split('|');
                          setCategoryName(categoryName);
                          setCategoryToken(categoryToken);
                        }}>
                          {categorydata.map((e) => (
                            <option key={e.categoryId} value={`${e.categoryName}|${e.token}`}>
                              {e.categoryName}
                            </option>
                          ))}
                        </select>
                        <input className="form-control form-group" placeholder="Book Name" type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} />
                        <input className="form-control form-group" type="text" value={bookDesc} onChange={(e) => setBookDesc(e.target.value)} placeholder="Book Description" />
                        <label className='label'>Book Image</label>
                        <input className='form-control form-group' type="file" name="image" accept="image/*" onChange={handleFileChange} />
                        <label className='label'>Pdf File</label>
                        <input className='form-control form-group' type='file' name='pdffile' accept='pdffile/*' onChange={handleFileChange} />
                        <button type='submit' className="contact_form_submit">Submit</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="right_conatct_social_icon d-flex align-items-end">
                      <div className="socil_item_inner d-flex">

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


    </Layout>
  );
}

export default Admin;
