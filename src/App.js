
import React from "react"
import Checkboxes2 from "./components/Checkboxes2";
//import Checkboxes2 from "./components/Checkboxes2"
import Todolist from "./components/Todolist"

function App() {
  console.log(Todolist)

  //  const newTodoListAffirmations = Todolist.map(todo => {
  //     return <p key={todo.id} affirmation={todo.affirmation}/>
  //     });

  // console.log(newTodoListAffirmations)

  // {Todolist.map(todo => { key={todo.id}
  //   return <label>{todo.task}</label>
  //  <Checkboxes2/>
  // }) }

  return (
    <div className="App">
    <h1>To Do's</h1>
    <hr></hr>
      <Checkboxes2/>
      {Todolist.map((todo) => {
      return <p {todo.keys} affirmation={todo.affirmation}></p>
      })}
      
    </div>
  );
}

export default App;
