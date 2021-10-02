
import React from "react"
import Checkboxes2 from "./components/Checkboxes2";
//import Checkboxes2 from "./components/Checkboxes2"
import Todolist from "./components/Todolist"

function App() {
  console.log(Todolist)

  // const newTodoList= Todolist.map(todo => {
  //   key={todo.id} task={todo.task} requiresConcentration = {todo.requiresConcentration}
  // });

  return (
    
    <div className="App">
    <p>To Do's</p>
      
    {Todolist.map(todo => { key={todo.id}
      return <label>{todo.task}</label>
     <Checkboxes2/>
    }) }
      
      
    </div>
  );
}

export default App;
