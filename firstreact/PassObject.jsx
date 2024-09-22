import React from 'react'

// const getImagUrl= (person, extra ='s')=>{
//   return(
//     'gallery'
//   )
// }
0
const getImageUrl = () => 'image/London Tipps.jpg';

 const Avatar = ({person, size}) =>{
  return(
    <img src={getImageUrl(person)} alt={person.name} width={size} height={size} 
    style={{borderRadius:"50%"}} />
  );
  
 }


const PassObject = () => {
  return (
    <div>
      <Avatar size={100} person={{name:'Mathias', imageId:'Y3234'}}/>

      <Avatar size={80} person={{name:'Chrisopher', imageId:'Y3jbgur4'}}/>


      <Avatar size={50} person={{name:'Emmylumps', imageId:'Yhdhd234'}}/>

    </div>
  );
}

export default PassObject