import React from "react"
import Checkboxes2 from "./components/Checkboxes2";
import Todolist from "./components/Todolist"
import Affirmation from "./components/Affirmation"
import Task from "./components/Task"
import Emoji from "./components/Emoji"

function App() {
console.log(Todolist)

//const affirmations = ["heck yes!", "Rock on", "don't give up", "way to go", "keep it up"];

//const affirmationStatements = Todolist.map(item => <Affirmation key={item.id} statement={item.affirmation} />)

const affirmationArray = Todolist.map(statement => <Affirmation key={statement.id} affirmation={statement.affirmation}/>)
console.log(affirmationArray);

const emojiArray = Todolist.map(emoji => <Emoji key={emoji.id} emoji={emoji.emoji}/>)
console.log(emojiArray[1]);

  return (
    <div className="App">
    <h1>To Do's</h1>
    <hr></hr>
      <Checkboxes2/>
      <div className="affirmations">
        {affirmationArray}
        {emojiArray}
      </div>

      <Task
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
        />

    </div>
  );
}

export default App;
