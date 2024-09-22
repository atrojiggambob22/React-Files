import React from 'react'

const utilities={
    alerter:{
        alert1:'Christian',
        alert2:'Samuel',
        alert3:'Life'   
    },

    stylebutton:{
        backgroundColor:'#2fdb2c',
        color:'red',
        border:"0px",
        marginBotton:"3px",
        width:'100%'
    }
}

const doSomething = (anyName) => alert(anyName);


const EventVariableArgument = () => {
  return (
    <div>
            <button style={utilities.stylebutton} onClick={()=>doSomething(utilities.alerter.alert1)}>
        Click this</button>

        <button style={utilities.stylebutton} onClick={()=> doSomething(utilities.alerter.alert2)}>Click This</button>

        <button style={utilities.stylebutton} onClick={()=> doSomething(utilities.alerter.alert3)}>Click This</button>
    </div>
    
  )
}

export default EventVariableArgument