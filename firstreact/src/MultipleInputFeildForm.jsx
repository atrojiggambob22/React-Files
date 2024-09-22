import React from 'react'
import { useState } from 'react'



function MultipleInputFeildForm(){
 const [input, setInput] = useState({});

    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value;
        setInput(values => ({...values, [name]:value}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(input);
        alert(input.map());
    }

    return(
        <form style={{background:'blue',
            height:'1000px',
            color:'#fff',
            fontWeight:'700',
            paddingTop:'200px',

        }}onSubmit={handleSubmit}> 


<label>
        <input placeholder='Enter your name:'
        type='text'
        name="username"
        value={input.username|| ""}
        onChange={handleChange}
        />

</label>
<br />
<br />

<label>

    <input placeholder='Enter you age'
     type="number"
     name='age'
     value={input.age || " "}
     onChange={handleChange} />
</label>
<br />
<br />

        <div style={{
            display:"flex",
            justifyContent:"center"
        }}>
            <input type="submit" />
        </div>

        
        </form>
    )
}

export default MultipleInputFeildForm