import React from 'react';
import { FaFacebook, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import {BsFillSendFill} from 'react-icons/bs';
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
           <footer className="footer-section">
          <div className="container">
              <div className="footer-cta pt-5 ">
                  <div className="row">
                      <div className="col-xl-4 col-md-4 mb-30">
                          <div className="single-cta">
                              <i className="fas fa-map-marker-alt"></i>
                              <div className="cta-text">
                                  <h4>Find us</h4>
                                  <span> IT Park , Morena Link Road, Gwalior-474001 </span>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-md-4 mb-30">
                          <div className="single-cta">
                              <i className="fas fa-phone"></i>
                              <div className="cta-text">
                                  <h4>Call us</h4>
                                  <span>+91 9876543212</span>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-4 col-md-4 mb-30">
                          <div className="single-cta">
                              <i className="far fa-envelope-open"></i>
                              <div className="cta-text">
                                  <h4>Mail us</h4>
                                  <span>TechiesGroup@gmail.com</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="footer-content pt-5 pb-1">
                  <div className="row">
                      <div className="col-xl-4 col-lg-4 mb-50">
                          <div className="footer-widget">
                              <div className="footer-logo">
                                  <h2>E-library</h2> 
                              </div>
                              <div className="footer-text">
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                              </div>
                              {/* <div className="footer-social-icon">
                                  <span>Follow us</span>
                                  <ul className="social_icon">
                                    <li><a href="#"><i><FaFacebook></FaFacebook></i></a></li>
                                    <li><a href="#"><i><FaLinkedinIn></FaLinkedinIn></i></a></li>
                                    <li><a href="#"><i><FaInstagram></FaInstagram></i></a></li>
                                    <li><a href="#"><i><FaGithub></FaGithub></i></a></li>
                                </ul>
                              </div> */}
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                          <div className="footer-widget">
                              <div className="footer-widget-heading">
                                  <h3 ><Link to="/about" style={{color: "black"}}>About Us</Link></h3>
                                  <h3 >  <Link to="/contact" style={{color: "black"}}>Contact us</Link> </h3>
                              </div>
                              <ul>
                                  
                                  
                                   
                                 
                                 
                              </ul>
                          </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                          <div className="footer-widget">
                              <div className="footer-widget-heading">
                                  <h3>Subscribe</h3>
                              </div>
                              <div className="footer-text mb-25">
                                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                              </div>
                              <div className="subscribe-form">
                                  {/* <form action="#">
                                      <input type="text" placeholder="Email Address" />
                                      <button><i><BsFillSendFill></BsFillSendFill></i></button>
                                  </form> */}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="copyright-area">
              <div className="container">
                  <div className="row">
                      <div className="text-center  text-lg-left">
                          <div className="copyright-text">
                              <p>Copyright &copy;{new Date().getFullYear()}, All Right Reserved <a href="#">Vinay</a></p>
                          </div>
                      </div>
                      
                  </div>
              </div>
          </div>
      </footer>
    </div>
  )
}

export default Footer
