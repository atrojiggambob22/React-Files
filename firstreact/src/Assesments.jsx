import React from 'react';

function PassDataProp (props) {

  return(
    <>
      <div>
        <h1>Hi my name  is {" "+ props.Pro.name} and i am a student of {" "+ props.Pro.school}
          and i am {" " + props.Pro.age}
        </h1>
      </div>
    </>
  )
}
const  Assesments =()=>{

  const  profile={
    name:"Mathias",
    school:"NIIT",
    age:"17",
    phone:"Iphone Xr"
  };

  return(
    <>
        <PassDataProp Pro={profile}/>
    </>
  )
}
export default Assesments;

// This is hiw we pass on=bject using props 


//   const { firstname, lastname, Age, Address, Email, complexion, CClass } = props;
//   return (
//     <>
//       <p>Firstname: {firstname}</p>
//       <p>Lastname: {lastname}</p>
//       <p>Age: {Age}</p>
//       <p>Address: {Address}</p>
//       <p>Email: {Email}</p>
//       <p>Complexion: {complexion}</p>
//       <p>Class: {CClass}</p>
//     </>
//   );
// }

// const Assesments = () => {
//   const student = {
//     firstname: "Christopher",
//     lastname: "Mathias",
//     Age: 2024-2007,
//     Address: "Number 40 Habour Road",
//     Email: "mathiasonyebuchi13@gmail.com",
//     complexion: "Brown",
//     CClass: "React",
//   };

//   return <List props={student} />;
// };
