import React, {useState} from 'react'


const MyComponent = () => {
  const [name, SetName] = useState("Guest");
    const [age, SetAge] = useState(0);
    const [employed, SetEmployed] = useState(false)


 //we can set a default value for the useStae paramter  
  const updateName = () =>{
    SetName("John");
  }

  const increaseAge =() =>{
    SetAge(age + 1);
  }

  const toggleEmployeeStatus= () =>{
        SetEmployed(!employed)
   }
  return (
    <>
        <h1>Name:{name}</h1>
        <button onClick ={updateName}>Cick me</button>

       
        <h1>Age:{age}</h1>
        <button onClick ={increaseAge}>Cick me</button>
    </>
)
}

export default MyComponent