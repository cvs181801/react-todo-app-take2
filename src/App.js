
import React from "react"
//import Checkboxes from "./components/Checkboxes"
import Todolist from "./components/Todolist"

function App() {
  console.log(Todolist)
  return (
    <div className="App">
      <p>Hi Universe</p>
      {Todolist.map(todo => { <p key={todo.id}></p>
        return <div>{todo.task}</div>
      })}
    </div>
  );
}

export default App;
