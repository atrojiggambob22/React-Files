import React from 'react'

const Students = (prop) => {
  return (
    <>
    <div style={{border:"2px solid black", width:"10%", margin:"20px auto", lineHeight:"50px",
        borderRadius:"5px", backgroundColor:"red", color:"white"
    }}>
        <div>Name: {prop.name}</div>
        <div> Age: {prop.age}</div>
        <div> Class:{prop.glass}</div>
    
    </div>
        
    </>
   
  )
}

export default Students