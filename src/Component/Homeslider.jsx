 import React from 'react'
 import "../Styles/Homeslider.css";
 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 const Homeslider = () => {
  
   return (
   <>
   <div id="carouselExampleAutoplaying" className="carousel slide slide-div" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
 
    <div class="title">
      <div class="title-inner">
        <div class="cafe">
          <div class="cafe-inner">
            <h2>Third</h2>
          </div>
        </div>
        <div class="mozart">
          <div class="mozart-inner"><p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nihil.</p></div>
        </div>
      </div>
    </div>
      <img src="1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    <div class="title">
      <div class="title-inner">
        <div class="cafe">
          <div class="cafe-inner">
            <h2>First</h2>
          </div>
        </div>
        <div class="mozart">
          <div class="mozart-inner"><p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nihil.</p></div>
        </div>
      </div>
    </div>
      <img src="8.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    <div class="title">
      <div class="title-inner">
        <div class="cafe">
          <div class="cafe-inner">
            <h2>Second</h2>
          </div>
        </div>
        <div class="mozart">
          <div class="mozart-inner"><p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, nihil.</p></div>
        </div>
      </div>
    </div>
      <img src="7.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" >
    <span className="carousel-control-prev-icon home-slider-icon" aria-hidden="true" style={{    borderRadius : "50%", padding: "30px"}}></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" >
    <span className="carousel-control-next-icon home-slider-icon" aria-hidden="true" style={{     borderRadius : "50%", padding: "30px"}}></span>
    <span className="visually-hidden" >Next</span>
  </button>
</div>
   </>
   )
 }
 
 export default Homeslider


 