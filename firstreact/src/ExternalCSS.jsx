import React from 'react'
import "./ExternalCSS1.css"

function Heading(){
    return(
        <p>
            <h1>React Master Class</h1>
        </p>
    )
}

function WriteUp1(){
    return(
        <p>
            <span>Sorry! My system is not Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maiores repudiandae vero obcaecati nobis odit sint neque dicta illo, iure ex ipsa beatae omnis autem laudantium id deleniti harum molestias....</span>
        </p>
    )
}

function FirstSection(){
    return(
        <div className='joel'>
            <Heading/>
            <WriteUp1/>
        </div>
    )
}
function SecondSection(){
    return(
        <div className='azez'>

        </div>
    )
}
const ExternalCSS = () => {
  return (
   <>
    <FirstSection/>
    <SecondSection/>
   </>
  )
}

export default ExternalCSS