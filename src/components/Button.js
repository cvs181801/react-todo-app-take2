import React from 'react'

class Button extends React.Component {
constructor() {
    super() 
    this.state = {
        count: 0
    }
}

handleClick() {
    console.log("clicked!!!")
}

    render() {
        
        return (
            <div>
                <button onClick={this.handleClick}>Count Up!</button>
            </div>
        )
    }
}

export default Button
