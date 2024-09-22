import React from 'react';
import './NewCarousel3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import fif from '/image/fif.jpg'; 

const NewCarousel3 = () => {
  return (
    <div>
      <Images />
    </div>
  );
};

const Images = () => {
  // const [isMobile, setIsMobile]=useState(false);

  
  return (
    <body className='bodykk'>
      <div className='dd'>
      <div className='bd-txt'>
        <div className='bd-txt-h we'>
          <div className='bd-txt-fr f1 f11'>
            <h1 className='bd-txt-h1 ff f3'>Why you should join the <br />affiliate program...</h1>
          </div>
          <div className='bd-txt-fr-p hp'>
            <div className='feature-item' style={{display:'flex'}}>
              <div className='div-img'>
                <img src={fif} alt="" className="feature-image"style={{width:'90px',height:'80px', marginTop:'15px',marginRight:"10px"}} />
              </div>
              <div className='bd-txt-h3'>
                <h3 className='h3-h '>Earn While You Share the Love!</h3>
                <p className='bd-txt-p'>
                  <li className='h3-h-li'>You can't earn anything less than NGN 800 with every referral you make.</li>
                </p>
              </div>
            </div>
            <div className='feature-item' style={{display:'flex'}}>
              <div className='div-img'  >
                <img  src={fif} alt="" className="feature-image"style={{width:'90px',height:'80px', marginTop:'15px',marginRight:"10px"}} />
              </div>
              <div className='bd-txt-h3'>
                <h3 className='h3-h vc'>Track your earnings and referrals</h3>
                <p className='bd-txt-p'>
                  <li className='h3-h-li'>Easily track your referrals and earnings to see how your network is growing.</li>
                </p>
              </div>
            </div>
          </div>
          {/* Button and Icons */}
          <div className='bd-txt-btn ss'>
            <div className='ion in fq'>
              <button className='icon-btn '>
                <FontAwesomeIcon icon={faCircle} className='icon'/>
              </button>
              <button className='icon-btn'>
                <FontAwesomeIcon icon={faCircle} className='icon glow' />
              </button>
              <button className='icon-btn'>
                <FontAwesomeIcon icon={faCircle} className='icon'/>
              </button>
            </div>
             <div className='oo as'>
              <button className='bd-btn w2'>Continue</button>
            </div>
          </div>
        </div>
      </div>
      <div className='img'>
        <img src={fif} alt="" />
      </div>
    </div>

    </body>
      );
};

export default NewCarousel3;
