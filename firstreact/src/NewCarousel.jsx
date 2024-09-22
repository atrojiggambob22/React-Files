import React from 'react';
// import './NewCarousel3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


const NewCarousel = () => {
  return (
    <div className='bd'>
      <Images />
    </div>
  );
};


const Images = () => {
  return (
    <>
      <div className='dd'>
        <div className='bd-txt'>
          <div>
            <div className='bd-txt-fr'>
              <h1 className='bd-txt-h1'>
                Welcome to Your Affiliate <span className='bd-txt-fr-s'>Dashboard!</span>
              </h1>
            </div>
            <div className='bd-txt-fr-p'>
              <p className='bd-txt-p'>
                Welcome to the BOOKIT Affiliate Program. Track your earnings and manage referrals. Let's explore the dashboard's key features.
              </p>
            </div>
          </div>
          <div className='bd-txt-btn'>
            <div style={{ display: 'flex' }}>
              <button className='icon-btn'>
                <FontAwesomeIcon icon={faCircle} className='icon' />
              </button>
              <button className='icon-btn'>
                <FontAwesomeIcon icon={faCircle} className='icon' />
              </button>
              <button className='icon-btn'>
                <FontAwesomeIcon icon={faCircle} className='icon' />
              </button>
            </div>
            <button className='bd-btn'>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};


export default NewCarousel;