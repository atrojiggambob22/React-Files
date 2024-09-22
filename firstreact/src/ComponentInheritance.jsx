import React from 'react'

const ComponentInheritance = () => {
  return <FormMajor/>
}

const doSomething = () =>alert ("Doing Something");

function FormMajor(){
    return(
        <div>

``            <Form onSubmit={doSomething}>
                <Input onChange={doSomething}/>
                <Input onChange={doSomething}/>
                <Input onChange={doSomething}/>
                <Input onChange={doSomething}/>
                
                <button>Submit Me</button>
            </Form>
        </div>
    )
}

function Form({onSubmit, children}){
    return(
        <form onSubmit={onSubmit}>
            {children}

        </form>
    )
}

function Input({onChange}){
    return(
        <input onChange={onChange} />
    )
}
export default ComponentInheritance



// ComponentInheritance component

// const ComponentInheritance = () => {
//   return <FormMajor/>;
// }
// This component simply renders the FormMajor component.
// 2. FormMajor component

// function FormMajor(){
//   return(
//     <div>
//       <Form onSubmit={doSomething}>
//         <Input onChange={doSomething}/>
//         <Input onChange={doSomething}/>
//         <Input onChange={doSomething}/>
//         <Input onChange={doSomething}/>
        
//         <button>Submit Me</button>
//       </Form>
//     </div>
//   )
// }
// This component renders a Form component with:
// Four Input components, each with an onChange event handler set to doSomething.
// A submit button.
// The onSubmit event handler for the Form component is also set to doSomething.
// 3. Form component

// function Form({onSubmit, children}){
//   return(
//     <form onSubmit={onSubmit}>
//       {children}
//     </form>
//   )hy7
// }
// This component renders an HTML form element with:
// An onSubmit event handler set to the onSubmit prop passed from the parent component (FormMajor).
// The children prop, which contains the four Input components and the submit button.
// 4. Input component

// function Input({onChange}){
//   return(
//     <input onChange={onChange} />
//   )
// }
// This component renders an HTML input element with an onChange event handler set to the onChange prop passed from the parent component (FormMajor).
// 5. doSomething function

// const doSomething = () => alert ("Doing Something");
// This function simply displays an alert message when called.
// Now, let's see how the components interact:
// The user types something in one of the input fields, triggering the onChange event.
// The Input component calls the doSomething function, which displays an alert message.
// When the user submits the form, the onSubmit event is triggered.
// The Form component calls the doSomething function, which displays an alert message.
// That's it! This code demonstrates how components can communicate with each other through props and event handlers in React.

