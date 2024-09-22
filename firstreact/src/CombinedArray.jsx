import React from 'react'

const CombinedArray = () => {
    const numbersOne = [1,2,3];
    const numbersTwo = [4,5,6]
    const numbersCombined = [...numbersOne, ...numbersTwo];
    
    const AR = numbersCombined.map((PR)=> <div>{PR}</div>)
  return AR
}

export default CombinedArray