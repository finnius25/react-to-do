import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [todo, setTodo] = useState({value: "", id: "", isComplete: false});
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState(false);
  const [displayCompleted, setDisplayCompleted] = useState(false)
  const [completedList, setCompletedList] = useState([])

  const handleTodoInput = (e) => {
    setTodo({ value: e.target.value, id: nanoid(), isComplete: false });
  };

  // Add todo
  const handleTodoSumbit = (e) => {
    e.preventDefault();
    if (todo.value === "" || todo.value.length > 20 || todo.value.length < 3) {
      setError(true);
    } else {
      setTodoList((prev) => [todo, ...prev]);
      setTodo({ value: "", id: "", isComplete: false });
      setError(false);
    }
  };

  // Delete todo
  const deleteHandler = (item) => {
    setTodoList((prev) => prev.filter((el) => el.id !== item.id));
  };

  // Complete todo
  const completeHandler = (item) => {
    todoList.map((el) => {
      if (el.id === item.id) {
        item.isComplete = true
        setCompletedList(prev => [...prev, item])
      }
    })
    setTodoList((prev) => prev.filter((el) => el.id !== item.id));
  };


  // Error Message
  const errorMessage = <h6>Invalid item. Try again.</h6>;

  const todoListElement = todoList.map((item) => {
    return (
      <div className="todoListContainer" key={item.id}>
        <button onClick={() => completeHandler(item)}>
          <FontAwesomeIcon icon={faCheck} />
        </button>

          <li className="todoListElement">{item.value}</li>

        <button onClick={() => deleteHandler(item)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    );
  });

  console.log(completedList)

  // Show Completed List
  const showCompleted = () => {
    setDisplayCompleted(prev => !prev)
  }

  const isCompleteListElement = completedList.map((item) => {
    return (
      <div>
        <li>{item.value}</li>
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
      {error ? errorMessage : ""}
      <ul className="todoListElementContainer">{todoListElement}</ul>
      <button type="button" className="showCompletedBtn" onClick={showCompleted}>Show Completed</button>
      <br />
      {displayCompleted && <ul className="isCompletedDisplay">{isCompleteListElement}</ul>}
    </div>
  );
};

export default App;
