import React, {useState, useEffect} from 'react'

const UseEffect = () => {
    const [number, setNumber] = useState(0);

    useEffect(()=>{
        console.log("it has been increaed ");

    }, [number]);

    function handleIncrease() {
        // if (number <= 10 ? 0 + number : number)
        setNumber(number + 1);
    }
   return ( 
    <div>
        <div>
            <h1>{number}</h1>
            </div>
    <div>
        <button onClick={handleIncrease} style={{backgroundColor:'red'}}>Increase</button>
    </div>
    </div>
    
  )
}

export default UseEffect