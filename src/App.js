
import React from "react"
import Checkboxes2 from "./components/Checkboxes2";
//import Checkboxes2 from "./components/Checkboxes2"
import Todolist from "./components/Todolist"

function App() {
  console.log(Todolist)

  // const newTodoList= Todolist.map(todo => {
  //   key={todo.id} task={todo.task} requiresConcentration = {todo.requiresConcentration}
  // });

  // {Todolist.map(todo => { key={todo.id}
  //   return <label>{todo.task}</label>
  //  <Checkboxes2/>
  // }) }

  return (
    
    <div className="App">
    <h1>To Do's</h1>
    <hr></hr>
      <Checkboxes2/>
    </div>
  );
}

export default App;
