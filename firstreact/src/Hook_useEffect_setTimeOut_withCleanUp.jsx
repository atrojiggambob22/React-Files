import React from 'react'
import {useState, useEffect} from 'react'


function Hook_useEffect_setTimeOut_withCleanUp  () {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let timer = setTimeout(() =>{
            setCount((count) => count +1);

        }, 1000);

        return ()=> clearTimeout(timer)
});

        return <h1>I've renderd {count} times!</h1>;
    }
    
  
export default Hook_useEffect_setTimeOut_withCleanUp