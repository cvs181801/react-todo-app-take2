//import Todolist from "./components/Todolist"
import React from "react"

class Checkboxes2 extends React.Component {
    constructor() {
        super()
        this.state = {
            checkboxState: true,
            word: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({ 
            checkboxState: true,
            word: 'complete!'
        }) 
    }
    render() {
        return (
            <div className="ToDos-Div">
                <div className="ToDos__item">
                <label>Study React</label>
                <input type="checkbox" onClick={this.handleClick}></input>
                <p>{this.state.word}</p>
                </div>

                <div className="ToDos__item">
                <label>Do Laundry</label>
                <input type="checkbox" onClick={this.handleClick}></input> 
                <p>{this.state.word}</p>
                </div>

                <div className="ToDos__item">
                <label>Pay Bills</label>
                <input type="checkbox" onClick={this.handleClick}></input> 
                <p>{this.state.word}</p>
                </div>

                <div className="ToDos__item">
                <label>Check Email</label>
                <input type="checkbox" onClick={this.handleClick}></input> 
                <p>{this.state.word}</p>
                </div>

                <div className="ToDos__item">
                <label>Feed the Cats</label>
                <input type="checkbox" onClick={this.handleClick}></input> 
                <p>{this.state.word}</p>
                </div>
            
            </div>
            )
        }
}
   
    export default Checkboxes2;