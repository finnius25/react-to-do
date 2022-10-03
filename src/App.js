import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [todo, setTodo] = useState({ value: "", id: "" });
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState(false)

  const handleTodoInput = (e) => {
    setTodo({ value: e.target.value, id: nanoid() });
  };

// Add todo
  const handleTodoSumbit = (e) => {
    e.preventDefault();
    if (todo.value === "" || todo.value.length > 20 || todo.value.length < 3){
      setError(true)
    } else {
      setTodoList((prev) => [todo, ...prev]);
      setTodo({value: "", id: ""})
      setError(false)
    }
  };

// Delete todo
  const deleteHandler = (item) => {
    setTodoList(prev => prev.filter((el) => el.id !== item.id ))
  }

// Complete todo
  const completeHandler = (item) => {
    setTodoList(prev => prev.filter((el) => el.id !== item.id ))
  }

  // Error Message
const errorMessage = <h6>Invalid item. Try again.</h6>

const todoListElement = todoList.map((item) => {
  return (
    <div className="todoListContainer" key={item.id}>
      <li className="todoListElement" >{item.value}</li>
      <button onClick={() => deleteHandler(item)}><FontAwesomeIcon icon={faTrash}/></button>
      <button onClick={() => completeHandler(item)}><FontAwesomeIcon icon={faCheck}/></button>
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
        {error ? (errorMessage) : ("")}
      <ul className="todoListElementContainer" >
        {todoListElement}
      </ul>
    </div>
  );
};

export default App;
