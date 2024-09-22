import React from 'react';
import "./Book.css";

const Book = () => {
  return (

    <>
<div className='TT'>
    <div className='bb'>
        <Title/>
    </div>
    <div className='bb'>
        <Title/>
    </div>
    <div className='bb'>
        <Title/>
    </div>
    <div className='bb'>
        <Title/>
    </div>

    <div className='bb'>
        <Title/>
    </div>
    <div className='bb'>
        <Title/>
    </div>
    <div className='bb'>
        <Title/>
    </div>
    <div className='bb'>
        <Title/>
    </div>
    <div className='bb'>
        <Title/>
    </div>
</div>


    </>
  )
}

const Title =() =>{
return(
    <div>
        <div>
        <img src="image/biker.jpg"/> 
        </div>
        <Context/>
        <div className='butons'>
           <div className='b1'>
            <button>Add To Cart </button>
        </div>
        <div className='b1'>
        <button>Add To Cart </button>
        </div>
         
        </div>
        
    </div>
)
}

const Context = () =>{
    return(<>
     <h1>The GoalsKepper</h1>
        <h3>A Great Movie</h3>
    </>
       
    )
}
export default Book