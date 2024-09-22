import React from 'react'

function Fees({prop}) {
    const {SM1, SM2, SM3, SM4} = prop;
    return (
        <>
        <p>Semester 1 Fees:{SM1} </p>
        <p>Semester 2 Fees:{SM2}</p>
        <p>Semester 3 Fees:{SM3}</p>
        <p>Semester 4 Fees:{SM4}</p>
        </>
    );
}
//Create a function or a class that would be used to create the class and return the result of the function call and the result of the function call itself

const Niit = () => {
    const List ={
         SM1:" "+220000,
         SM2:" "+ 220000,
         SM3:" "+300000,
         SM4:" "+300000,
    };
   
    return <Fees prop={List}/>;
    
    
   
};

// This function is used to pass values to the properties of the object passed in the constructor function call and return them to the object passed in the constructor function

//Basically this function is used to assign the properties of the object passed in the constructor function
export default Niit