import React from "react"
import Checkboxes2 from "./components/Checkboxes2";
import Todolist from "./components/Todolist"
import Affirmation from "./components/Affirmation"
import Task from "./components/Task"
import Emoji from "./components/Emoji"
import Todoitem from "./components/Todoitem"
import Practice from "./components/Practice"
import Greeting from "./components/Greeting"
import NotloggedIn from "./components/NotLoggedIn"
import Button from "./components/Button"
import Conditional from "./components/Conditional"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: Todolist 
    }
    this.handleChange = this.handleChange.bind(this)
  }

handleChange(id) {  
  this.setState(prevState => {
    const newTodos = prevState.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } 
      return todo
    })
    return {
      todos: newTodos
    }
  })
}  




render() {

    return (
      <div className="App">
      <h1>To Do's</h1>
      <hr></hr>
        
        {Todolist.map(item => < Todoitem key={item.id} id={item.id} task={item.task} requiresConcentration={item.requiresConcentration} 
        howOften={item.howOften} affirmation={item.affirmation} completed={item.completed} handleChange={this.handleChange}/>)}
        <Conditional completed={this.state.completed}/>
      </div>
    );
  }
}

export default App;
