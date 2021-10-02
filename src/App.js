import React from "react"
import Checkboxes2 from "./components/Checkboxes2";
import Todolist from "./components/Todolist"
//import Affirmation from "./components/Affirmation"

function App() {
console.log(Todolist)

const affirmations = ["heck yes!", "Rock on", "don't give up"];

// const newArrayAffirmations = Todolist.map((todo) => {
//   return <p key={todo.keys} affirmation={todo.affirmation}></p>
//   })
// console.log(newArrayAffirmations);

  return (
    <div className="App">
    <h1>To Do's</h1>
    <hr></hr>
      <Checkboxes2/>
      {affirmations.map((affirmation) => (
         <p>{affirmation}</p>
      ))}
    </div>
  );
}

export default App;
