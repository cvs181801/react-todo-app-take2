//import Todolist from "./components/Todolist"
import React from "react"

class Checkboxes2 extends React.Component {
    constructor() {
        super()
        this.state = {
            checkboxState: true,
            word1: '',
            word2: '',
            word3: '',
            word4: '',
            word5: ''
        }
        this.handleClick1 = this.handleClick1.bind(this)
        this.handleClick2 = this.handleClick2.bind(this)
        this.handleClick3 = this.handleClick3.bind(this)
        this.handleClick4 = this.handleClick4.bind(this)
        this.handleClick5 = this.handleClick5.bind(this)
    }

    handleClick1(event) {
        event.preventDefault();
        this.setState({ 
            checkboxState: true,
            word1: 'complete!'
        }) 
    }

    handleClick2(event) {
        event.preventDefault();
        this.setState({ 
            checkboxState: true,
            word2: 'rock on!'
        }) 
    }

    handleClick3(event) {
        event.preventDefault();
        this.setState({ 
            checkboxState: true,
            word3: 'excellent!'
        }) 
    }

    handleClick4(event) {
        event.preventDefault();
        this.setState({ 
            checkboxState: true,
            word4: 'perfection!'
        }) 
    }

    handleClick5(event) {
        event.preventDefault();
        this.setState({ 
            checkboxState: true,
            word5: 'beyond awesome!'
        }) 
    }


    render() {
        return (
            <div className="ToDos-Div">
                <div className="ToDos__item">
                <label>Study React</label>
                <input type="checkbox" onChange={this.handleClick1}></input>
                <p>{this.state.word1}</p>
                </div>

                <div className="ToDos__item">
                <label>Do Laundry</label>
                <input type="checkbox" onChange={this.handleClick2}></input> 
                <p>{this.state.word2}</p>
                </div>

                <div className="ToDos__item">
                <label>Pay Bills</label>
                <input type="checkbox" onChange={this.handleClick3}></input> 
                <p>{this.state.word3}</p>
                </div>

                <div className="ToDos__item">
                <label>Check Email</label>
                <input type="checkbox" onChange={this.handleClick4}></input> 
                <p>{this.state.word4}</p>
                </div>

                <div className="ToDos__item">
                <label>Feed the Cats</label>
                <input type="checkbox" onChange={this.handleClick5}></input> 
                <p>{this.state.word5}</p>
                </div>
            
            </div>
            )
        }
}
   
    export default Checkboxes2;