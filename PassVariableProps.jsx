import React from 'react'

function Car(props) {
    
    return (
        <>
        <span>{props.name}</span>
        <span>{props.color}</span>
        <span>{props.model}</span>
        <span>{props.year_production}</span>
        </>
    )
}



 function PassVariableProps(){

    let carName = "Venza"
    let color = "yellow"
    let model = "Cardillac"
    let manufactured = "Vanza"

    return(
        <>
        <div style={{marginLeft: '100px', fontSize: '40px'}}>
        i have a car called <Car name={carName}/>;
        it is <Car color={color}/> in color;
        produced in <Car year_production={manufactured}/>;
        made by <Car model={model}/>;


        </div>

        <Car name={"mathias "} color={"brown "}/>

        {/* when dealing wth props the value that u want to assigne to them should be in a curly brace */}
        </>

       
    )
}

export default PassVariableProps