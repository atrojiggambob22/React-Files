import React from 'react'

const Destructurizing = () => {
    const numbers =[1,2,3,4,5,6];

    const [one, two, ...rest] = numbers

    let SS = numbers.map((nn)=> (<p>{nn}</p>));

   return SS

    // const first = one.map((pp)=> <div>{pp}</div>)
    // const po = numbers.map((oo)=> <div>{oo}</div>)

  
}

export default Destructurizing