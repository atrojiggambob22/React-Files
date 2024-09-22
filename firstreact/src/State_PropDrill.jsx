import React from 'react'
import {useState} from "react"



const State_PropDrill = () => {
  const [firstName, setFirstName] = useState("Mathias");
  const [school, setSchool] = useState("Niit");
  const [lastName, setLastName] = useState("Onyebuchi");
  
  return (
    <>
        <h1>{`Hello i am ${firstName} ${lastName}!`}</h1>
        <Component2 school={school} firstName={firstName} lastName={lastName}/>
    </>
  )
}
function Component2({school, firstName, lastName}) {
  return(
    <>
      <h1>{`I attend ${school}`}</h1>
      <Component3 firstName={firstName} lastName={lastName}/>
    </>
  )
    
}

function Component3({firstName, lastName}) {
  return(
    <>
        <h1>{`My first name is ${firstName} and my last name is ${lastName}`}</h1>
    </>
  )
}


// Assignment


// create a file with the name State_PropDrillthe name of the component bringing in the state should still be the file name
// the second component will be your first name the last component will be your last name
export default State_PropDrill