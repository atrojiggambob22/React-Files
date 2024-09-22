import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import NewCarousel2 from './NewCarousel2';
import NewCarousel3 from './NewCarousel3';
import NewCarousel4 from './NewCarousel4';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
// import'./Roboto'

const Carousel = () => {
  const sliderRef = useRef(null);
  const [isActive, setIsActive] = useState(false); // Added state for active status

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change slide every 3 seconds
    afterChange: (current) => setIsActive(current), // Set active when slide changes
  };

  

  return (
    <div className="container mx-auto mt-10">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <NewCarousel2 isActive={isActive}/>
        </div>
        <div>
          <NewCarousel3 isActive={isActive} />
        </div>
        <div>
          <NewCarousel4 />
        </div>
      </Slider>
      
    </div>
  );
};

export default Carousel;
