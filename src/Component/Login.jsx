import React, { useState } from 'react'
import "../Styles/Login.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";
import { TypeAnimation } from 'react-type-animation';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://e-library-backend.onrender.com/login", {
        email,
        password,
      });
      setUserData(response.data);
      console.log(response.data)


      let userToken = response.data.userData;
      if (userToken.email === 'admin1@gmail.com') {
        Cookies.set("admintoken", userToken.token, { expires: 1 });

        navigate("/");
      } else {
        Cookies.set("useretoken", userToken.token, { expires: 1 });
        navigate("/");
      }
      alert("login Successful")
      // navigate("/")
    } catch (error) {
      console.error("Error during login:", error);
      alert("Wrong Password")
    }
  }


  return (
    <div>
      <div className='login-container '>
        <div className='L-left-container px-3 py-5'>

          <h1 className='L-h1 py-4'>Login Form</h1>
          <h3 className='L-h3 text-center'><p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, voluptates.</p>
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
        <div className='L-right-container px-md-3 my-5 py-5'>

          <form className='L-form' onSubmit={handleSubmit}>

            <div className='form_group'>
            <label htmlFor="">Email</label>
            <br />
            <input type="text"
              placeholder='Email..'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            </div>
            <br />
            <div className='form_group'>
            <label htmlFor="">Password</label>
            <br />
            <input type="password"
              value={password}
              placeholder='Password..'
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <br />
              <div className='btn w-100'>
            <button className='L-btn' type='submit'>Login</button>
            </div>

            <br />
            <p className='register text-center'>
              Don't have an account?
              <Link to="/Register">Register here</Link> {/* Link to the registration page */}
            </p>
          </form>


        </div>

      </div>
    </div>
  )
}

export default Login

