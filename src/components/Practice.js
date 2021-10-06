import React from 'react'

class Practice extends React.Component {
    
    state = {value: true};
    //{console.log(this.state.value)};

    render() {
          
            return (
                <div>
                    <p>🧜🏿‍♀️</p>
                    <p>!</p>
                    <p>You are currently logged in</p>
                    <button onClick={()=> Object.assign(this.state.value,{value: false}) }>Hi</button>
                    {console.log(this.state.value)}
                </div>
            )
        }
    }

    export default Practice