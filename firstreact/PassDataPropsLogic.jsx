import React from 'react'



const PassDataPropsCar = () => {
 
}

const PassDataPropsLogic = (prop) => {
  
  const {name, color,model,year_production}  = prop;
  return (
    <>
    <span>{prop.name}</span>
    <span>{prop.color}</span>
    <span>{prop.model}</span>
    <span>{prop.year_production}</span>
    </>
  )
}


export default PassDataPropsLogic