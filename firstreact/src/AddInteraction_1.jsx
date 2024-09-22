import React from 'react'
import "./classNaming.css"
// import { Button } from 'bootstrap';

const AddInteraction_1 = () => {
  return (
   <Toolbar 
   onPlayMovie={() =>alert('Playing!')}
   onUploadImage={() => alert('Uploading')} 
   />
   
  );
}

function Toolbar({onPlayMovie, onUploadImage}){
    return(
        <div>
            <button  style={{height:'40px', borderRadius:'10px',background:'greenyellow'}} onClick={onPlayMovie}>
                    Play Movie
            </button>

            <button  style={{height:'40px', borderRadius:'10px',background:'greenyellow'}}  onClick={onUploadImage}>
                Upload Image
            </button>
            
        </div>
   );
} 

// function Button ({onClick, children}){
//     return(
//         <button className='classNamer' onClick={onClick}>
//                 {children}
//             </button>
//     )
// }

//Buuton is a component but i made to look like a normal button class
// they are also props inside the button component 
export default AddInteraction_1