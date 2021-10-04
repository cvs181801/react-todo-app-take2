import React from "react"
import Todolist from "./Todolist"

function Affirmation(props) {

    console.log("these are props", props);
    return(
        <div>
            <p>{props.affirmation}</p>
        </div>
    )
}

export default Affirmation