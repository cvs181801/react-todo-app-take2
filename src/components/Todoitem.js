import React from 'react'
import Todolist from "./Todolist"

function Todoitem(props) {
    return (
        <div>
            <p>{props.task}</p>
            <p>{props.requiresConcentration}</p>
            <p>{props.howOften}</p>
            <p>{props.affirmation}</p>
        </div>
    )
}

export default Todoitem