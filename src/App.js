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


function App() {
console.log(Todolist)

//const affirmations = ["heck yes!", "Rock on", "don't give up", "way to go", "keep it up"];

//const affirmationStatements = Todolist.map(item => <Affirmation key={item.id} statement={item.affirmation} />)

const affirmationArray = Todolist.map(statement => <Affirmation key={statement.id} affirmation={statement.affirmation}/>)
console.log(affirmationArray);

const emojiArray = Todolist.map(emoji => <Emoji key={emoji.id} emoji={emoji.emoji}/>)

const todoItems =  Todolist.map(item => < Todoitem key={item.id} task={item.task} requiresConcentration={item.requiresConcentration} 
  howOften={item.howOften} affirmation={item.affirmation}/>) 

  console.log(todoItems);

  return (
    <div className="App">
    <h1>To Do's</h1>
    <hr></hr>
      <Checkboxes2/>

      <div className="affirmations">
        {affirmationArray}
        {emojiArray}
      </div>

      {todoItems}

      <Greeting isLoggedIn={false}/>

      {/* <Task
        task="do laundry"
        requiresConcentration= "false"
        howOften= 'weekly'
        affirmation= 'excellent'
        />
        <Emoji 
        emoji="🥧"
        />

      <Task
        task="check mail"
        requiresConcentration= "false"
        howOften= 'daily'
        affirmation= 'rock on'
        />
        <Emoji 
        emoji="🍷"
        />

      <Task
        task="check snail mail"
        requiresConcentration= "false"
        howOften= 'daily'
        affirmation= 'super'
        />
        <Emoji 
        emoji="🍪"
        />

      <Task
        task="build my website"
        requiresConcentration= "true"
        howOften= 'as needed'
        affirmation= 'awesome'
        />
        <Emoji 
        emoji="🦸🏿‍♀️"
        />


      <Task
        task="water the plants"
        requiresConcentration= "false"
        howOften= 'monthly'
        affirmation= 'sweet.'
      />  
      <Emoji 
        emoji="🧟‍♀️"
        />  */}

    </div>
  );
}

export default App;
