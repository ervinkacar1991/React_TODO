import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
    console.log(e.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, newTask]);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return <h1>{task}</h1>;
        })}
      </div>
    </div>
  );
}

export default App;
