import React from 'react'

function Car(props){    
    return(
        <>
        What's the name of your Car:{' '+ props.n.carName +' '}
        <br />
        What's the name of your Car :{' ' +props.b.carName + ''}
        <br />
        What's the name of your Car :{' ' +props.c.carName +''} 
        </>
    )
}

    
export default function PassArrayProp(){
const name={
    carName:"Venza", carColor:"green",
    carModel:"Spider", manufacturedOn:"2022"
}
const name2={
    carName:"Tesla" ,carColor:"white",
    carModel:"Model-Y", manufacturedOn:"2020"
}
const name3={
    carName:"Nissan",carColor:"black",
    carModel:"GT", manufacturedOn:"2018"
}

    return (
        <>
            <Car n={name} b={name2} c={name3}/>

        </>
      );
}