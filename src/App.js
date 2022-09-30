import { useState } from "react";
import "./App.css";

const App = () => {
  const [todo, setTodo] = useState({ value: "" });
  const [todoList, setTodoList] = useState([]);

  const handleTodoInput = (e) => {
    setTodo({ value: e.target.value });
  };

  const handleTodoSumbit = (e) => {
    e.preventDefault();
    setTodoList((prev) => [...prev, todo.value]);
  };

  return (
    <div className="App">
      <h1>What's your goals today?</h1>
      <form onSubmit={handleTodoSumbit}>
        <input
          className="todo"
          type="text"
          value={todo.value}
          onChange={handleTodoInput}
        />
      </form>
    </div>
  );
};

export default App;
