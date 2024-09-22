import React from 'react'

const person={
    name:'Gregorio Y. Zaar',
    theme1:{
        backgroundColor:"black",
        color:'pink',
        height:'100vh'
    },

    theme2:{
        height:'100px',
        width:'100px',
        borderRadius:'50px'
    },
    imgStyle:{
        display:'flex',
        justifyContent:'center',
        
    },
    
    listStyle:{
        textAlign:"center",
        listStyle:'none'
    }
};

export default function ThemeStyling(){
    return (
        <div style={person.theme1}>
        <div style={person.imgStyle}>
            <h1>{person.name} Todos</h1>
        </div>

        <div style={person.imgStyle}>
        <img style={person.theme2} src="" alt="" />
        </div>

        <div style={person.imgStyle}>
            <ul>
            <li style={person.lifeStyle}>Improve the videophone</li>
            <li style={person.lifeStyle}>Prepare aeronautics lectures</li>
            <li style={person.lifeStyle}>Work on the alcohol-fuelled engin</li>
            </ul>
             </div>
        </div>
    );
}