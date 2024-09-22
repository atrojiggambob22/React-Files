import React from 'react'
import PropTypes from 'prop-types'

const UserGreeting = (prop) => {

   

    const LoggIn = 
    <h1 style={{backgroundColor:"Green", borderRadius:"10px"}}>Welcome {prop.username} </h1>

    const NotLoggedIn =
     <h1 style={{backgroundColor:"Red", borderRadius:"10px"}}>Pls Loggin first</h1>

    return(prop.isLoggedIn ? LoggIn : NotLoggedIn);

    //You can use any of these


    // if (prop.isLoggedIn) {
    //     return <div> welcome {prop.username}</div>
    // }
    // else{
    //     return <div>Log in to continue</div>
    // }
}

UserGreeting.proptypes={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,

}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting