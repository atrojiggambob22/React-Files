import React from 'react';


const ReactEvent = () => {
    const shoot = () =>{
        alert("Great shoot");
    };

return (
    <button onClick={shoot}>Take the Shot!</button>
  );

};
export default ReactEvent;


