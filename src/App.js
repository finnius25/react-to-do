import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";

const App = () => {
  const [todo, setTodo] = useState({ value: "", id: "" });
  const [todoList, setTodoList] = useState([]);

  const handleTodoInput = (e) => {
    setTodo({ value: e.target.value, id: nanoid() });
  };

  const handleTodoSumbit = (e) => {
    e.preventDefault();
    setTodoList((prev) => [...prev, todo]);
    setTodo({value: "", id: ""})
  };

const todoListElement = todoList.map((item) => {
  return <li className="todoListElement" key={item.id}>{item.value}</li>
})

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
      <br />
      <ul className="todoListElementContainer">
        {todoListElement}
      </ul>
    </div>
  );
};

export default App;
