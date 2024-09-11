import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "../Styles/Author.css";

const Author = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
      
      autoplaySpeed: 3000,
    nextArrow: <FaArrowRight style={{ color: 'black' }}/>,
    prevArrow: <FaArrowLeft style={{ color: 'black' }}/>,
     beforeChange: (current, next) => setCurrentIndex(next),
  };
  const CustomArrow = ({ direction }) => (
    <div className={`custom-arrow ${direction}`}>
      {direction === 'right' ? <FaArrowRight /> : <FaArrowLeft />}
    </div>
  );
  return (
    <div className='author-con'>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className='author-div'  >
            <div className='author-img'>
              <img src={item.img} alt={item.name} className='cate-img' />
            </div>
            <div className='author-content'>
              <h3>{item.name}</h3>
              <h6>Author</h6>
              <hr />
              <p>“{item.review}”</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};



const data = [
  {
    name: `vinay`,
    img: `A1.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum`
  }, {
    name: `ayush`,
    img: `A2.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum`
  }, {
    name: `pawan`,
    img: `A3.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum`
  }, {
    name: `aman`,
    img: `A4.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum`
  }, {
    name: `sujan`,
    img: `A5.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illumLorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum!`
  }, {
    name: `shuvam`,
    img: `A6.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum`
  }, {
    name: `vinay`,
    img: `A2.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum`
  }, {
    name: `vinay`,
    img: `A4.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum`
  }, {
    name: `vinay`,
    img: `A1.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum`
  }, {
    name: `vinay`,
    img: `A3.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum`
  }, {
    name: `vinay`,
    img: `A4.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum`
  }, {
    name: `vinay`,
    img: `A5.jpg`,
    review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illumLorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam expedita illum!`
  },
]

export default Author
