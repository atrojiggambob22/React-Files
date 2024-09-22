import React from 'react'; 
import './NewCarousel2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import fif from '/image/fif.jpg'; 

const NewCarousel2 = () => {
  return (
    <div style={{display:'flex'}}>
        <Images/>
        
    </div>
  )
}

const Images = () => {
        return(
            <>
            <body>
            <div className='dd'>
                   <div className='bd-txt'>
                  <div className='jij'>
                        <div className='bd-txt-h'>   
                         <div className='bd-txt-fr c1 cr'>
                        <h1 className='bd-txt-h1 sd'>Welcome to Your Affilate Dashboard!</h1>
                    </div>
                    <div className='bd-txt-fr-p'>
                        <p className='bd-txt-p C Cr'>
                            Welcome to the BOOKIT Affilate Program track your earnings and manage referrals Lets expore the dashBord Key featurs 
                        </p>
                    </div>
                    
                             <div className='bd-txt-btn nb'>
                            <div style={{ display: 'flex' }} className='ion nm'>
                            <button className='icon-btn bn'>
                            <FontAwesomeIcon icon={faCircle} className='icon glow'/>
                            </button>
                          <button className='icon-btn bn'>
                          <FontAwesomeIcon icon={faCircle} className='icon' />
                        </button>
                        <button className='icon-btn bn'>
                          <FontAwesomeIcon icon={faCircle}  className='icon' />
                        </button>
                      </div>
                      <div className='oo po gh' >
                            <button className='bd-btn w3'>Continue</button>
                        </div>
                         </div>
       
                       
                  </div>
                    </div>

                  </div>
                    
                    <div className='img'>
                        <img src={fif} alt="" /> {/* Use the imported image */}
                    </div>
                    
                </div>

            </body>
                
                
            </>
    )
}

export default NewCarousel2;