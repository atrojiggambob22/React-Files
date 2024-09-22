import React from 'react'
const doSomething = (anyName) => alert(anyName);
//here the  functin doesnt know what the value of anyName would be its ia an alert that woukd return the values of what evre we set 

const doArithmetic = (var1, var2, var3)=> {
    const sum = var1 +" "+ var2+ " "+ var3;
    alert(sum);
}

const EventArgument = () => (
    <>
        <EventArgument1 daffodil = "A lady"/>
    <hr />
    <EventArgument2 daffodil = "Prophetess" sophia="Pastor" amaka="Evangelist" />
    <hr />
    </>
);

const  EventArgument1 = ({daffodil}) => {
    return <button onClick={() => doSomething(daffodil)}>Click Me</button>
};

const  EventArgument2 = ({daffodil, sophia, amaka}) => {
    return <button onClick={() => doArithmetic(daffodil, sophia, amaka)}>Click Me</button>
};

export default EventArgument    