import React from 'react'
import "../Styles/Latestbook.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Latestbook = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
      <div>
          <div className='w-full m-auto main-div'>
              <div className='latest-book-heading text-center'>
                  <h1>Top 10 Latest Books!</h1>
                  <p>Browse the collection of our best top interesting Books. You will definitely find what you are looking for.</p>
              </div>
              
              <div  className='bg-white h-[450px] text-black rounded-xl div1'>
                  <Slider {...settings}>
                      {data.map((d ) => (
                          
                              <div className='h-56 rounded-t-xl flex justify-center items-center div2'>
                                  <img src={d.img} alt={d.name} width={"200px"} height={"200px"} className='h-44 w-44 rounded-full' />
                              </div>
                          
                      ))}
                  </Slider>
                  </div>
               
              {/* <Link to="/usercat">
                  <button className=' '>Show Latest Books</button>
              </Link> */}
          </div>
      </div>
  );
}


const data = [
    {
      name : `vinay`,
      img : `ok.png`,
         },{
      name : `vinay`,
      img : `ok1.jpg`,
        },{
      name : `vinay`,
      img : `ok2.jpg`,
         },{
      name : `vinay`,
      img : `ok3.jpg`,
        },{
      name : `vinay`,
      img : `ok4.png`,
        },{
      name : `vinay`,
      img : `ok5.jpg`,
         },{
      name : `vinay`,
      img : `ok6.jpg`,
      },{
      name : `vinay`,
      img : `ok7.png`,
        },{
      name : `vinay`,
      img : `ok8.jpg`,
         },{
      name : `vinay`,
      img : `ok9.jpg`,
         },{
      name : `vinay`,
      img : `ok4.png`,
          },{
      name : `vinay`,
      img : `ok2.jpg`,
          },
  ]
  
   
  

export default Latestbook