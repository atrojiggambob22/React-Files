import React from 'react';
import './WebPage.css';


// Basically everything is a component thats why it is easy to navigate through the whole page
const WebPage = () => {
  return (
    <div className='whole-body'>
        <div className='btn'>
          <div className='btn-nav'>
             <Nav/>
          </div>
               </div>
      <div className='body background'>
        <Body/>
      </div>
    </div>
    
  )
}
function Nav(){
    return(
        <>
            <button className='nav-btn'>Home</button>
            <button className='nav-btn'>About</button>
            <button className='nav-btn'>Services</button>
            <button className='nav-btn'>Contact Us</button>
            
        </>
    )
}
function Body(){
  return(<>
  <div>
    <div className='body-d-h1'>
        <h1 className='body-h1'>Send a Gift of <br /> Appreciation </h1>
    </div>
        <div className='body-d-p'>
            <p className='body-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto culpa unde soluta enim eos deserunt aperiam nisi quo eius ratione. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, possimus.</p>     
        </div>
        <div>
          <button className='body-btn'> icon-----BOOK NOW</button>
          <button className='body-btn2'>Contact Us</button>
        </div>
  </div>
     
  </>)
}

export default WebPage