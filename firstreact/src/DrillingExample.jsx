import React from 'react'
import { useState } from 'react'

function DrillingExample (){
    let [school, setSchool] = useState("NIIT");
    let [father, setFather] = useState("Johnson");
    let [mother, setMother] = useState("MarryAnn");
    
    return (
    <div>
            <h1>{`Hi i School at ${school} and These are my parents Mr.${father} and 
            Ms.${mother}`}</h1>

            <People father={father} mother={mother} shool={school}/>    
    </div>
  )

  function People({shool, father, mother})
 // Always remeber to put the arguments inside a curly brace inside the bracket orElse its going to be an object indiead of component
  {
        return(
            <div>
            {`${father} ${shool}`}

            </div>
        )
  }
}

export default DrillingExample