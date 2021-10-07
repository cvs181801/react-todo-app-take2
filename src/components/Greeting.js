import React from 'react'
import Practice from "./Practice"
import NotLoggedIn from "./NotLoggedIn"

export default function Greeting(props) {
    console.log(props);
    if(props.isLoggedIn) {
        return(
            
            <Practice/>
        )
    } 
    return (
        <NotLoggedIn/>
    )
}
