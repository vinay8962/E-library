import React, { useState } from 'react';
import "../Styles/Register.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';


const Register = () => {
  const navigate = useNavigate(); 
  const [user, setUser] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    confPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the API
      const response = await axios.post("https://e-library-backend.onrender.com/register", user);
      console.log('Registration successful:', response.data);
      navigate("/login")
      // Redirect to another page or perform any additional actions as needed.
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <div className='Register-container'>
        <div className='R-left-container px-4'>
          <h1 className='R-h1 py-3'>Register Form</h1>
          <h3 className='R-h3 text-center'><p className='py-4 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, voluptates.</p>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Same substring at the start',
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                'E-Library',
                2000,

              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block', color: '#ff8607' }}
              repeat={Infinity}
            />
          </h3>
        </div>
        <div className='R-right-container'>
          <form onSubmit={handleSubmit} className='R-form py-5 my-4 px-3 px-md-3'>
            <label htmlFor="name">Name :</label>
            <br />
            <input type="text" name='name' placeholder='Name..' value={user.name} onChange={handleInputChange} required />
            <br />
            <label htmlFor="email">Email :</label>
            <br />
            <input type="email" name='email' placeholder='Email..' value={user.email} onChange={handleInputChange} required />
            <br />
            <label htmlFor="number">Number :</label>
            <br />
            <input type="number" name="number" value={user.number} onChange={handleInputChange} placeholder='Number..' />
            <br />
            <label htmlFor="password">Password :</label>
            <br />
            <input type="password" name='password' value={user.password} onChange={handleInputChange} placeholder='Password..' />
            <br />
            <label htmlFor="confPassword">Confirm Password :</label>
            <br />
            <input type="password" name='confPassword' value={user.confPassword} onChange={handleInputChange} placeholder='Confirm Password..' />
            <br />

            <div className='btn w-100'>
            <button className='R-btn' type='submit'>Sign up</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
 