import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import NewCarousel2 from './NewCarousel2';
import NewCarousel3 from './NewCarousel3';
import NewCarousel4 from './NewCarousel4';
import './Carousel.css';

const Carousel = () => {
  const [isActive, setIsActive] = useState(0); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setIsActive(current), 
  };

  return (
    <div className="container mx-auto mt-10">
      <Slider {...settings}>
        <div key="slide-1">
          <NewCarousel2 isActive={isActive === 0} />
        </div>
        <div key="slide-2">
          <NewCarousel3 isActive={isActive === 1} />
        </div>
        <div key="slide-3">
          <NewCarousel4 />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;