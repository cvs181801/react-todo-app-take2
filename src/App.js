import React from "react"
import Checkboxes2 from "./components/Checkboxes2";
import Todolist from "./components/Todolist"
import Affirmation from "./components/Affirmation"
import Task from "./components/Task"
import Emoji from "./components/Emoji"
import Todoitem from "./components/Todoitem"
import Practice from "./components/Practice"
import Greeting from "./components/Greeting"
import LoggedIn from "./components/LoggedIn"
import Button from "./components/Button"
import Conditional from "./components/Conditional"


class App extends React.Component {
  constructor() {
    super()
      this.state = {
        isLoggedIn: false
      }
      this.handleClick = this.handleClick.bind(this)
    }
  
  


    //to do list ***
//     this.state = {
//       todos: Todolist 
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

// handleChange(id) {  
//   this.setState(prevState => {
//     const newTodos = prevState.todos.map(todo => {
//       if (todo.id === id) {
//         return {
//           ...todo,
//           completed: !todo.completed
//         }
//       } 
//       return todo
//     })
//     return {
//       todos: newTodos
//     }
//   })
// }  

/*         
        {Todolist.map(item => < Todoitem key={item.id} id={item.id} task={item.task} requiresConcentration={item.requiresConcentration} 
        howOften={item.howOften} affirmation={item.affirmation} completed={item.completed} handleChange={this.handleChange}/>)}
        */


handleClick() {
  this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn
    }));
}


  render() {

      return (
        <div className="App">
        <h1>To Do's</h1>
        <hr></hr>

        <button onClick={this.handleClick}>Log In</button>
        <LoggedIn isLoggedIn={this.state.isLoggedIn}/>
        </div>
      )
  }

}
export default App;
