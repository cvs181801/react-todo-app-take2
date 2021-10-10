import React from 'react'

export default function Conditional(props) {
    console.log(props);
    if(props.completed === true) {
        return (
            <h1>Complete!</h1>
        )
    } else {
        return (
            <h1>Not yet complete</h1>
        )
    }
}
