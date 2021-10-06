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
                    <button onClick={()=>{console.log("logged in?", this.state.value)}}>Hi</button>
                </div>
            )
        }
    }

    export default Practice