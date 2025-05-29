import React from 'react';
import './WizardChan.css';
import fi from '../public/image/fi.png'
import f2 from '../public/image/f2.png';
import f3 from '../public/image/f3.png';
import f4 from '../public/image/f4.png';
import f5 from '../public/image/f5.png';
import f6 from '../public/image/f6.png';
import star from '../public/image/star.png';
import speaker from '../public/image/speaker.png';
import amazon from '../public/image/amazon.png'
import dribble from '../public/image/dribble.png'
import HubSpot from '../public/image/HubSpot.png'
import Notion from '../public/image/Notion.png'
import Netflix from  '../public/image/Netflix.png'
import Zoom from '../public/image/Zoom.png'
import frame from '/image/frame.png';
const WizardChan = () => {
  return (
    <div><MoreDetails/></div>
  )
}
const MoreDetails = () => {
    return(
        <>
        <div className='baba'>
            <div>
                <nav>
                    <div className='nav1 '>
                           <div className='nav-sub1'><img src={star} alt="" /></div> 
                        <h3>WizardZ</h3>
                        
                        </div>
                    <div className='nav-sub2'>
                        <div className='nav-sub2-c'><h4>About Us</h4></div>
                        <div className='nav-sub2-c'><h4>Service</h4></div>
                        <div className='nav-sub2-c'><h4>Use Cases</h4></div>
                        <div className='nav-sub2-c'><h4>Pricing</h4></div>
                        <div className='nav-sub2-c'><h4>Blog</h4></div>
                        <div className='nav-sub2-c '>
                            <h4 className='special'>Request a quote</h4>
                        </div>
                    </div>
                </nav>
            </div>

    <div className='sec2'>
              <div className='sec2-sub1'>
                <div className='sec2-sub1-sub1'>
                    <div  className='sec2-sub1-sub2'><h3>Navigating the Digital Landscape for success</h3></div>
                    <div className='sec2-sub1-sub3' >
                        <p>
                            our digital marketing agency helps businesses to grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                        </p>
                    </div>
                    <div className='sec2-sub1-sub4'>
                        <h4>Book a consultation</h4>
                    </div>
                </div>
                <div className='image'>
                    <img src={speaker} alt="" />
                </div>
            </div>

        <div className='sec3-sub1'>
            <div className='sec3-sub2'>
                <div><img src={amazon} alt="" /></div>
                <div><img src={dribble} alt="" /></div>
                <div><img src={HubSpot} alt="" /></div>
                <div><img src={Notion} alt="" /></div>
                <div><img src={Netflix} alt="" /></div>
                <div><img src={Zoom} alt="" /></div>
            </div>

            <div className='sec3-sub3'>
                <div className='sec3-sub3-sub1'>
                    <h4>Services</h4>
                    <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include</p>
                </div>
            </div>

        <div className='sec4'>
            <div className='sec4-sub1'>
                <div className='sec4-sub1-ch1'>
                    <h3> <span style={{backgroundColor:'rgb(174, 248, 128)', borderRadius:'3px'}}>Search Engine</span> <span style={{backgroundColor:'rgb(174, 248, 128)',borderRadius:'4px'}}>Optimization</span></h3>
                    <div className='sec4-sub1-icon'>
                     <div>
                    <img src="/image/arrow-1.png" alt="" />

                     </div>
                    <div>
                        <h6 style={{color:'black'}}>Learn More</h6>
                     </div>
                </div>
                </div>
                <div className='sec4-sub1-imgi'>
                    <img src={fi} alt="" />
                </div>
                </div>
                <div className='sec4-sub2'>
                <div className='sec4-sub1-ch2'>
                    <h3> <span style={{backgroundColor:'white', borderRadius:'3px'}}>Pay Per Click</span>  <span style={{backgroundColor:'white', borderRadius:'3px'}}>advertising</span></h3>
                    <div className='sec4-sub1-icon'>
                     <div>
                     <img src="/image/arrow-1.png" alt="" />
                     </div>
                    <div>
                        <h6 style={{color:'black'}}>Learn More</h6>
                     </div>
                </div>
                </div>
                <div className='sec4-sub1-img2'>
                <img src={f3} alt="" />
                </div>
                </div>
                <div className='sec4-sub3'>
                <div className='sec4-sub1-ch3'>
                    <h3> <span style={{backgroundColor:'white', borderRadius:'3px'}} > Social Media</span>  <span style={{backgroundColor:'white', borderRadius:'3px'}}>Marketing</span></h3>
                    <div className='sec4-sub1-icon'>
                     <div>
                         <img src="/image/arrow-2.png" alt="" />
                     </div>
                    <div>
                        <h6 style={{color:'white'}}>Learn More</h6>
                     </div>
                </div>
                </div>
                <div className='sec4-sub1-img3'>
                <img src={f2} alt="" />
                </div>
                </div>
                <div className='sec4-sub4'>
                <div className='sec4-sub1-ch4'>
                    <h3> <span style={{backgroundColor:'rgb(174, 248, 128)',borderRadius:'3px'}}>E-mail</span><br /><span style={{backgroundColor:'rgb(174, 248, 128)', borderRadius:'3px'}}>marketing </span></h3>
                    <div className='sec4-sub1-icon'>
                     <div>
                     <img src="/image/arrow-1.png" alt="" />
                     </div>
                    <div>
                        <h6>Learn More</h6>
                     </div>
                </div>
                </div>
                <div className='sec4-sub1-img4'>
                <img src={f4} alt="" />
                </div>
                </div>
                <div className='sec4-sub5'>
                <div className='sec4-sub1-ch5'>
                    <h3> <span style={{backgroundColor:'white', borderRadius:'3px'}}>Content</span><br /><span style={{backgroundColor:'white', borderRadius:'3px'}}>Creation</span> </h3>
                    <div className='sec4-sub1-icon'>
                     <div>
                        <img src="/image/arrow-1.png" alt="" />
                     </div>
                    <div>
                        <h6>Learn More</h6>
                     </div>
                </div>
                </div>
                <div className='sec4-sub1-img5'>
                <img src={f6} alt="" />
                </div>
                </div>

                <div className='sec4-sub6'>
                <div className='sec4-sub1-ch6'>
                    <h3> <span style={{backgroundColor:'rgb(174, 248, 128)',borderRadius:'3px'}}>Analytic and </span><span style={{backgroundColor:'rgb(174, 248, 128)', borderRadius:'3px'}}>Tracking</span>  </h3>
                    <div className='sec4-sub1-icon'>
                     <div>
                     <img src="/image/arrow-2.png" alt="" />
                     </div>
                    <div>
                        <h6 style={{color:'white'}}>Learn More</h6>
                     </div>
                </div>
                </div>
                <div className='sec4-sub1-img6'>
                <img src={f5} alt="" />
                </div>
                </div>

        </div>
        </div>
            </div>

            <div className='sec5'>
                <div>
                    <div className='sec5-sub'>
                        <div className='sec5-sub1-h'>
                             <h3>Lets Make Things Happen 😊</h3>
                        </div>
                        <div className='sec5-sub1-p'>
                            <p>Contact Us today and learn more about how our digital marketing services can help your business grow and succeed online</p>
                        </div>
                        <div  className='sec5-sub1-btn'>
                            <div className='sec5-sub1-btn-sub'>Get Your free Proposal</div>
                        </div>
                       
                    </div>
                </div>
                <div className='sec5-sub1-img' >
                    <img src={frame} alt="" />
                </div>
            </div>
           
        </div>
        </>
    )
}

export default WizardChan