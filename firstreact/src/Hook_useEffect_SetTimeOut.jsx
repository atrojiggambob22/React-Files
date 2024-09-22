import React from 'react'
import { useState, useEffect } from 'react'

function Hook_useEffect_SetTimeOut (){
  const [count, setCount] = useState(0)

  useEffect(() => {
   setTimeout(()=>{
        setCount((count) => count + 1);
        if(count < 995)
            
            {
                alert("Time Up!!!")
            }

    }, 1000)
  })
  return <div style={{display:'flex', justifyContent:'center',
    paddingTop:'130px',}}> <h1>I've renderd {count} times</h1></div>
}

export default Hook_useEffect_SetTimeOut