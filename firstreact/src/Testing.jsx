
import React, {useState} from 'react';

const Testing = () => {
    const [number, setNumber]= useState(0);

    function increase(){
        return(
          setNumber ( number + 1)
          //When using use State to acomplish this kind of task make sure in the rerurn statement thats where the main work should be 
        )
    }

    function reduse(){  
      return(
            setNumber(number - 1) 
        )
    }

    function reset(){
        return(
            setNumber(0)   
        )
    }

  return (
    <>
    <h1>{number}</h1>
        <button onClick={increase}>Add</button>
        <button onClick={reset}>Reset</button>
   <button onClick={reduse}>Minus</button>
   
    </>
   
  )
}

export default Testing