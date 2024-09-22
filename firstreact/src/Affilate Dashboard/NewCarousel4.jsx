import React from 'react';
import fif from '/image/fif.jpg'; 
import './NewCarousel4.css'
const NewCarousel4 = () => {
  return (
    <div className="flex justify-center items-center">
      <Images />
    </div>
  );
};

const Images = () => {
  return (
    <body>
      <div className='dd'>
      <div className='bd-txt lk'>
        <h1 className='bd-txt-h1 k1'>Get Started with just ₦1000. Pay once and for all.</h1>
        <p className='bd-txt-p k2'>
          Access all of the BOOKIT Affiliate Dashboard and start earning from your referrals.
        </p>
        
        {/* Center the button on this page */}
        <div className="flex justify-center hh">
          <button className="bd-btn kk">Pay ₦1000</button>
        </div>
      </div>
      
      <div className='img ig'>
        <img src={fif} alt="" />
      </div>
    </div>
  

    </body>
    );
    };

export default NewCarousel4;
