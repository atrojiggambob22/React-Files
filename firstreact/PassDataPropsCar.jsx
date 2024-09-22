import React from 'react'
import PassDataPropsLogic from "./PassDataPropsLogic"

const PassDataPropsCar = () => {
  return (

    <div style={{marginleft: '100px', fontSize: '40px'}}>
        I have a car called <PassDataPropsLogic name ='Venza' />;
        it is <PassDataPropsLogic color ="blue" /> in color;
    </div>
  )
}

export default PassDataPropsCar