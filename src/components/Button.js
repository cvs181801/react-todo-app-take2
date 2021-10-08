import React from 'react'

class Button extends React.Component {
constructor() {
    super() 
    this.state = {
        count: 0
    }
    this.handleClick = this.handleClick.bind(this)
}

handleClick() {
    this.setState(prevState => {
        return {
            count: prevState.count + 1
    }
})

}

    render() {
        
        return (
            <div>
                <button onClick={this.handleClick}>Count Up!</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}

export default Button
