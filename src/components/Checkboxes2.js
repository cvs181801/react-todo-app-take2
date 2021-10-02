//import Todolist from "./components/Todolist"
import React from "react"

function Checkboxes2() {
    return (
        <div className="ToDos-Div">
            <div className="ToDos__item">
            <label>Study React</label>
            <input type="checkbox"></input>
            </div>

            <div className="ToDos__item">
            <label>Do Laundry</label>
            <input type="checkbox"></input> 
            </div>

            <div className="ToDos__item">
            <label>Pay Bills</label>
            <input type="checkbox"></input> 
            </div>

            <div className="ToDos__item">
            <label>Check Email</label>
            <input type="checkbox"></input> 
            </div>

            <div className="ToDos__item">
            <label>Feed the Cats</label>
            <input type="checkbox"></input> 
            </div>
           
        </div>
        )
    }
   
    export default Checkboxes2;