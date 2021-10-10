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


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: Todolist 
    }
    this.handleChange = this.handleChange.bind(this)
  }



handleChange(event) {
  event.preventDefault();
  //console.log("changed!", id)
  console.log(this.state)
}  
//console.log(Todolist)

//const affirmations = ["heck yes!", "Rock on", "don't give up", "way to go", "keep it up"];

//const affirmationStatements = Todolist.map(item => <Affirmation key={item.id} statement={item.affirmation} />)

// const affirmationArray = Todolist.map(statement => <Affirmation key={statement.id} affirmation={statement.affirmation}/>)
// console.log(affirmationArray);

// const emojiArray = Todolist.map(emoji => <Emoji key={emoji.id} emoji={emoji.emoji}/>)

 


render() {

    return (
      <div className="App">
      <h1>To Do's</h1>
      <hr></hr>
        <Checkboxes2/>
          {Todolist.map(item => < Todoitem key={item.id} task={item.task} requiresConcentration={item.requiresConcentration} 
          howOften={item.howOften} affirmation={item.affirmation}/>)}
  
      </div>
    );
  }
}

export default App;
