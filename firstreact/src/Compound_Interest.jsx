import React from 'react'

// surpose invest 1000 doallars at an annual interest if 5%, compounded anually. After 10years  how much will i have 

// P= initial principle;
// r= annual interest rate 
// n= compounded rate
// t= time in years 
// A=P(1+r/n)nt
const Compound_Interest = () => {
  let p =1000;
  let r= 0.05;
  let n=1;
  let t= 10;

  const sum = p*Math.pow(1+r/n,n*t)
  

  return (
    <h1>Your compound Interest is = {sum}</h1>
  )
  
}

export default Compound_Interest