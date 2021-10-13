import React from 'react'
import Practice from "./Practice"
import LoggedIn from "./LoggedIn"

export default function Greeting(props) {
    console.log(props);
    if(props.isLoggedIn) {
        return(
            
            <Practice/>
        )
    } 
    return (
        <LoggedIn/>
    )
}
