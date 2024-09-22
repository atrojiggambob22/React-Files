import React, { useState } from 'react'
import  {imageList} from "./data.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

const StateComponentMemory = () => {

    const [index, setIndex] = useState(0);

    let hasPrev = index > 0;
    let hasNext = index < imageList.length - 1;

    function handlePrevClick(){
        if (hasPrev){
            setIndex(index - 1);
        }
    }

    function handleNextClick(){
        if(hasNext){
            setIndex(index + 1);
        }
    }

    let portrait = imageList[index];

    return (
        <>
            <div className='App'>
                <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div style={{display:"flex", justifyContent:"center"}}>
                        <button onClick={handlePrevClick} disabled={!hasPrev}>
                            Previous ({index + 1} of {imageList.length})
                        </button>

                        <button onClick={handleNextClick} disabled={!hasNext}>
                            Next ({index + 1} of {imageList.length})
                        </button>   
                    </div>
                    <br />
                </div>

                <div style={{display:"flex", justifyContent:"center"}}>
                    <img 
                        src={portrait.image} 
                        width="100px" 
                        height="120px" 
                        alt="" 
                        className='img-thumbnail rounded-circle'
                    />

                    <br />
                    <br />
                </div>   
                <hr />
                <hr />

                <div style={{display:"flex", justifyContent:"center"}}>
                    <p style={{textAlign:"center"}}>
                        Full Name: {portrait.FirstName}
                        <br />
                        Gender: {portrait.Gender}
                        <br />
                        Position: {portrait.Position}
                    </p>
                </div>
            </div>
        </>
    )
}

export default StateComponentMemory