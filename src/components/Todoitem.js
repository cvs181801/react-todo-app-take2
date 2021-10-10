import React from 'react'


function Todoitem(props) {
    return (
        <div>
            <p>{props.id}</p>
            <p>{props.task}</p>
            <p>{props.requiresConcentration}</p>
            <p>{props.howOften}</p>
            <p>{props.affirmation}</p>
            <p>{props.completed}</p>
            <input 
            type="checkbox" 
            onChange={()=> props.handleChange(props.id)}></input>
        </div>
    )
}

export default Todoitem