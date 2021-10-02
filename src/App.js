
import React from "react"
import Checkboxes2 from "./components/Checkboxes2";
//import Checkboxes2 from "./components/Checkboxes2"
import Todolist from "./components/Todolist"

function App() {
  console.log(Todolist)

  const newTodoList= Todolist.map(todo => {
    key={todo.id} task={todo.task} requiresConcentration = {todo.requiresConcentration}
  });

  return (

    <div className="App">
      <p>To Do's</p>
      
        return <label>{todo.task}</label>
      
      
    </div>
  );
}

export default App;
