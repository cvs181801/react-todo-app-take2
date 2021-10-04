import React from 'react'

export default function Task(props) {
    console.log(props)
    return (
        
    <div>
        <p>task: {props.task}</p>
        <p>requiresConcentration: {props.requiresConcentration}</p>
        <p> howOften: {props.howOften}</p>
        <p>affirmation: {props.affirmation}</p>
    </div>
    )
}

