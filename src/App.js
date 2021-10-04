import React from "react"
import Checkboxes2 from "./components/Checkboxes2";
import Todolist from "./components/Todolist"
//import Affirmation from "./components/Affirmation"
import Task from "./components/Task"

function App() {
console.log(Todolist)

//const affirmations = ["heck yes!", "Rock on", "don't give up", "way to go", "keep it up"];

//const affirmationStatements = Todolist.map(item => <Affirmation key={item.id} statement={item.affirmation} />)

  return (
    <div className="App">
    <h1>To Do's</h1>
    <hr></hr>
      <Checkboxes2/>
      {/* <div className="affirmations">
      {affirmationStatements}
      </div> */}

      <Task
        task="do laundry"
        requiresConcentration= "false"
        howOften= 'weekly'
        affirmation= 'excellent'
        />

      <Task
        task="check mail"
        requiresConcentration= "false"
        howOften= 'daily'
        affirmation= 'rock on'/>

      <Task
        task="check snail mail"
        requiresConcentration= "false"
        howOften= 'daily'
        affirmation= 'super'/>

      <Task
        task="build my website"
        requiresConcentration= "true"
        howOften= 'as needed'
        affirmation= 'awesome'
        />

      <Task
        task="water the plants"
        requiresConcentration= "false"
        howOften= 'monthly'
        affirmation= 'sweet.'
      />  

    </div>
  );
}

export default App;
