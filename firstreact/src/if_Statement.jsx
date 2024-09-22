import React from 'react'

const x = 5;
const myElement = <h1>{(x) < 10 ? "if statements as tenary expressions" : "Goodbye"}</h1>;

const root = 
ReactDom.createRoot(document.getElementById("root"));

root.render(myElement)


export default if_Statement