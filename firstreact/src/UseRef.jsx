import React,{useState, useRef} from 'react'



const UseRef = () => {

    const refContainer = useRef(null);

    function handleSubmit(e){
        e.preventDefault();
      
    }
   
  return (
    <div>

        <form action="">
            <div>
                <input type="text" placeholder='Enter Your Name' ref={refContainer}  />
                <button type="submit" onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default UseRef