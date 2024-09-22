import React from 'react'

const myArray = ['apple','banana','orange']
const myFruits = myArray.map((item) => <p>{item}</p>);

const MapMethod1 = () => {
  return myFruits;
}

export default MapMethod1