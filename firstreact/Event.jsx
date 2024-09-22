import React from 'react'

const doSomething=() => alert("Something")

const doAnything=() =>{
    alert("An image can be displayed")
} 
const Event1 =()=>{
    return(
        <>
            <button onClick={(alert('Doing Somex!!!'))}>Click this </button>
        </>
    );
}

const Event2 =()=>{
    return(
        <>
            <button onClick={doAnything}>Click this </button>
        </>
    );
}

const Event3 =()=>{
    return(
        <>
            <button onClick={doSomething}>Click this </button>
        </>
    );
}
const Event4 =()=>{
    return(
        <>
            <button onClick={doSomething}>Click this </button>
        </>
    );
}


const Event = () => {
  return (
    <>
   <div>
    <Event1/>
    <hr/>
    <Event2/>
    <Event3/>
    <Event4/>
   </div>
    </>
    
  )
}

export default Event