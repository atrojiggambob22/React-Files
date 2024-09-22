import React from 'react'

function calculate(){
    const add = a +b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
    
    return [add, multiply, divide, subtract];
}

function App(){
    
const [add, multiply, divide, subtract] = calculate(4,5)
}
// document.write("<p>" + add + "</p")

export default DestructurizingMaths