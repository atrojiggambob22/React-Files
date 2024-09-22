import React from 'react'

let m = 'female';
const x = 5;
    

const jsxTenaryOperator =
<h1>
{(m== "female")? "Nnenna" : "Sam"}
<br></br>
<br></br>
    {(x) < 10 ?"X is less than 10" : "X is NOT less than 10 "}


</h1>;



const TenaryOperator = () => {
  return (
        <div>{jsxTenaryOperator}</div>
  )
}

export default TenaryOperator

