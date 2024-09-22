import React from 'react'

function Fees(prop){
    let Result;
    for(index = 0; index < prop.prop.length; index++) {
            Result = Result.concat(<h2>Semester {index} &gt &gt &gt &gt {prop.prop[index]} </h2>);
    }
    return Result;
}

const Lums = () => {
    const semesters = [200000, 250000, 300000, 350000];

    

    // const combine = [...SM1, ...SM2, ...SM3 , ...SM4];
    return(
        <>
        <h1>NIIT's Tuition</h1>
        <Fees prop = {semesters} />
      </>
    )
}

export default Lums