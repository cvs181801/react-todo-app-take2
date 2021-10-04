import React from "react"
import Checkboxes2 from "./components/Checkboxes2";
import Todolist from "./components/Todolist"
import Affirmation from "./components/Affirmation"

function App() {
console.log(Todolist)

//const affirmations = ["heck yes!", "Rock on", "don't give up", "way to go", "keep it up"];

const affirmationStatements = Todolist.map(item => <Affirmation key={item.id} statement={item.affirmation} />)

  return (
    <div className="App">
    <h1>To Do's</h1>
    <hr></hr>
      <Checkboxes2/>
      <div className="affirmations">
      {affirmationStatements}
      </div>
    </div>
  );
}

export default App;
