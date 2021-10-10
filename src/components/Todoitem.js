import React from 'react'
import Todolist from "./Todolist"

function Todoitem(props) {
    return (
        <div>
            <p>{props.task}</p>
            <p>{props.requiresConcentration}</p>
            <p>{props.howOften}</p>
            <p>{props.affirmation}</p>
            <input 
            type="checkbox" 
            onChange={()=> props.handleChange(props.task.id)}></input>
        </div>
    )
}

export default Todoitem