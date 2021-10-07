import React from 'react'

class Practice extends React.Component {
    
    state = {value: true};
    //{console.log(this.state.value)};
   
    //conditional rendering
    //create a method on the class which renders??
    //{console.log(this.state.value)}()=> this.state.value = false

    render() {
          
        // renderP() {
        //     <p>You are currently logged out</p>

        // }
            return (
                <div>
                    <p>🧜🏿‍♀️</p>
                    <p>!</p>
                    <p>You are currently logged in</p>
                    <button onClick={()=> alert('hi')}>Hi</button>
                
                </div>
            )
        }
    }

    export default Practice