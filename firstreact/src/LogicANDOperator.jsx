import React from 'react'


function CarGarage({cars}){
    return(
        <>
            <h1>Garage</h1>
            {cars.length >  0 &&

                <h2>You have {cars.length} cars in your garage</h2>
            }
        </>
    );
}

const cars = ['Ford', 'BMW'];


const LogicANDOperator = () => {
  return <CarGarage cars={cars}/>
}

export default LogicANDOperator