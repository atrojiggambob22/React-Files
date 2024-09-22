import React, { useState } from 'react';

function Hook_useState_Update_State() {
  const [color, setColor] = useState("red");
  const [Name, setName] = useState("Color group");

  return (
    <>
      <h1> The {Name} of my favorite color is {color}! </h1>
      Using a button to update the state:
      <button
        type='button'
        onClick={() => {
          setColor("blue");
          setName("Color Type");
        }}
      >
        Update
      </button>
    </>
  );
}

export default Hook_useState_Update_State;