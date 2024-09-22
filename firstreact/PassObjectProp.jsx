import React from 'react'

function NIIT(props){
return(
    <>
        <h2 style={{backgroundColor:"gray", margin:"20px", borderRadius:"12px", padding:"3px"}}>Students offer {props.sem1.subject1} for:
        {" " + props.sem2.subject1} <span style={{color:"red"}}>!</span></h2>

        <h2 style={{backgroundColor:"gray",  margin:"20px", borderRadius:"12px", padding:"3px"}}>Students offer {" "+props.sem1.subject2} for:
        {" " + props.sem2.subject2} <span style={{color:"red"}}>!</span></h2>

        <h2 style={{backgroundColor:"gray", margin:"20px", borderRadius:"12px", padding:"3px"}}>Students offer {" "+props.sem1.subject3} for:
        {" " + props.sem2.subject3} <span style={{color:"red"}}>!</span></h2>

        <h2 style={{backgroundColor:"gray", margin:"20px", borderRadius:"12px", padding:"3px"}}>Students offer {" "+props.sem1.subject4} for:
        {" " + props.sem2.subject4} <span style={{color:"red"}}>!</span></h2>
    </>
    );
}

const PassObjectProp = () => {

    const sem1SubjectObject= {
        subject1:"Andriod", subject2:"JSF",
        subject3:"Hibernate", subject4:"Spring"
    };

    const sem1PriceListObject={
        subject1:"65,000", subject2:"200,000",
        subject3:"70,000", subject4:"90,0000"
    }
  return (
    <>
     <h1 style={{color: "green", borderRadius:"3px", backgroundColor:"purple"}}>What courses do you offfer?</h1>
    <NIIT sem1={sem1SubjectObject} sem2={sem1PriceListObject}/>
    </>
  );
}

export default PassObjectProp