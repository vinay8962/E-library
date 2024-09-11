import React from 'react';
import "../Styles/Header.css";
import { NavLink } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa6";
import Cookies from 'js-cookie';
import { useCart } from './CartContext';


const Header = () => {
  const { cartItems } = useCart();
  const auth = Cookies.get('admintoken')
  const user = Cookies.get('useretoken')
  const logout = () => {
    Cookies.remove("admintoken")
    Cookies.remove("useretoken")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg   nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">E-library</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item li">
                <NavLink to="/">
                  <a className="nav-link" aria-current="page" href="#">Home</a>
                </NavLink>
              </li>
              <li className="nav-item li">
                <NavLink to="/about">
                  <a className="nav-link" aria-current="page" href="#">About</a>
                </NavLink>
              </li>

              <li className="nav-item li">
                <NavLink to="/contact">
                  <a className="nav-link" aria-current="page" href="#">Contact</a>
                </NavLink>
              </li>

              {auth ? (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item li">
                    <NavLink to="/allbook">
                      <a className="nav-link" aria-current="page" href="#">Book</a>
                    </NavLink>
                  </li>
                  <li className="nav-item li">
                    <NavLink to="/authorpage">
                      <a className="nav-link" aria-current="page" href="#">Author</a>
                    </NavLink>
                  </li>
                  <li className="nav-item li">
                    <NavLink to="/category">
                      <a className="nav-link" aria-current="page" href="#">Category</a>
                    </NavLink>
                  </li>
                  
                  <li className="nav-item li">
                    <NavLink to="/admin">
                      <a className="nav-link" aria-current="page" href="#">Admin</a>
                    </NavLink>
                  </li>
                  <NavLink to="/login">
                    <button className="btn Login-btn" type="submit" onClick={logout}>Logout</button>
                  </NavLink>
                </ul>
              ) : user ? (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item li">
                    <NavLink to="/userallbook">
                      <a className="nav-link" aria-current="page" href="#">Book</a>
                    </NavLink>
                  </li>
                  
                  <li className="nav-item li">
                    <NavLink to="/userauthor">
                      <a className="nav-link" aria-current="page" href="#">Author</a>
                    </NavLink>
                  </li>
                  <li className="nav-item li">
                    <NavLink to="/usercat">
                      <a className="nav-link" aria-current="page" href="#">Category</a>
                    </NavLink>
                  </li>
                  <li className="nav-item li">
                    <NavLink to="/mybook">
                    <a className="nav-link" aria-current="page" href="#">Mybook</a>

                    </NavLink>
                  </li>
                  <NavLink to="/Cart">
               <button className="btn Login-btn"  >
                <FaCartArrowDown style={{width: "50px", height: "25px"}} />
                <span>{cartItems.length}</span>
                </button>
                </NavLink>
                  <NavLink to="/login">
                    <button className="btn Login-btn" type="submit" onClick={logout}>Logout</button>
                  </NavLink>
                </ul>
              ) :
                <NavLink to="/login">
                  <button className="btn Login-btn" type="submit">Login</button>
                </NavLink>}
              
            </ul>



          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
