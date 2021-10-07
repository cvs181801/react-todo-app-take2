import React from 'react'

class Practice extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: "true",
            animalType: "frog",
            isAFrog: "true",
            isAnAmphibian: "true",
            isAReptile: "false"

        }

    }
    
    //state = {value: true};
    //{console.log(this.state.value)};
   
    //conditional rendering
    //create a method on the class which renders??
    //{console.log(this.state.value)}()=> this.state.value = false

    render() {
          
        // renderP() {
        //     <p>You are currently logged out</p>
        //<button onClick={()=> alert('hi')}>Hi</button>

        // }
            return (
                <div>
                    <p>🧜🏿‍♀️</p>
                    <p>!</p>
                    <p>You are currently logged in</p>
                
                </div>
            )
        }
    }

    export default Practice