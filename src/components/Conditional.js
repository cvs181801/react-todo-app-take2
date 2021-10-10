import React from 'react'

export default function Conditional(props) {
    console.log(props);
    if(props.isLoading === true) {
        return (
            <h1>loading</h1>
        )
    } else {
        return (
            <h1>Loaded!</h1>
        )
    }
}
