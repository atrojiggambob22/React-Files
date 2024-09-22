import React, { useState } from 'react'
import "./Counter.css"

// const Counter=()=>{
//     const [firstName, setFirstName]=useState("Mathias")
//     const [middle, setMiddle]=useState("christopher")
//     const [lastname, setLastName]=useState("onyebuchi")

//     return(
//         <>
//         <h1>{`hello i am  ${firstName} `}</h1>
//         <Component2 secondname={middle}/>
//         </>
        
//     )

//     function Component2({secondname}){
//             return(
//                 <>
//                     {`Hi ${secondname}`}
//                 </>
//             )
//     }
// }

// This s how prop drillign works




 const Counter = () => {
     const [count, setCount] = useState(0)

 const increment=()=>{
     setCount(count + 1);
 }
 const decrement=()=>{
     setCount(count - 1);
 }

 const reset=()=>{
     setCount(0);
 }
   return (
     <div>
         <p className='bb'>{count}</p>
         <div className='Hello'>
         <button  className='llo' onClick={increment}>Increase</button>
          <button className='lo' onClick={reset}>Reset</button>
          <button  className='o' onClick={decrement}>Reduce</button>
         </div>
         
     </div>
         
   
   )
 }
//   This are different ways to use useSTate Hook

export default Counter