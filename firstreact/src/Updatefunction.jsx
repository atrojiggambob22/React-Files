import React,{useState} from 'react'

const Updatefunction = () => {
    const[number, setNumber] =useState(0)

    function handleIncrease(){
        setNumber( prevnumber => prevnumber+1);
        setNumber( prevnumber => prevnumber+1);
        setNumber( prevnumber => prevnumber+1);
    }
    function handleReset(){
        setNumber(0)
    }

    function handleDecrement(){
        setNumber( number-1)
    }

  return (
    <div>
        <h1 style={{color:'red'}}>Count:{number}</h1>
        <br />
        <br />
        <button onClick={handleIncrease}>Inrease</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Updatefunction

//The main goal of this updater Function is to update the state of the component with the latest data available using the previous update function or previous value of the component.We can achieve this by  using the first Alphabet of the variable name or adding 'prev' before the variable name.
// React takes the pending state of the component and adds it to a queue fot them to be called

//Basically Updater function is sent as an argument to the setState ()