import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [todo, setTodo] = useState({ value: "", id: "" });
  const [todoList, setTodoList] = useState([]);

  const handleTodoInput = (e) => {
    setTodo({ value: e.target.value, id: nanoid() });
  };

// Add todo
  const handleTodoSumbit = (e) => {
    e.preventDefault();
    setTodoList((prev) => [todo, ...prev]);
    setTodo({value: "", id: ""})
  };

// Delete todo
  const deleteHandler = (item) => {
    setTodoList(prev => prev.filter((el) => el.id !== item.id ))
  }

const todoListElement = todoList.map((item) => {
  return (
    <div className="todoListElementContainer" key={item.id}>
      <li className="todoListElement">{item.value}</li>
      <button onClick={() => deleteHandler(item)}><FontAwesomeIcon icon={faTrash}/></button>
    </div>
  )
})



  return (
    <div className="App">
      <h1>What's your goals today?</h1>
      <form onSubmit={handleTodoSumbit}>
        <input
          className="todo-input"
          type="text"
          value={todo.value}
          onChange={handleTodoInput}
        />
      </form>
      <br />
      <ul>
        {todoListElement}
      </ul>
    </div>
  );
};

export default App;
