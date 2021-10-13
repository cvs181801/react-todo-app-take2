import React from 'react'

export default function LoggedIn(props) {
    
        if(props.isLoggedIn === true) {
            return(
                <div>
                <p>You are logged in!</p>
            </div>
            )
        } else {
            return(
                <div>
                <p>You are not logged in.</p>
            </div>
            )
        }
}
