//  Fetch here
// checkbox lista na elementi so onChange handler na vrednosta zemena od https://jsonplaceholder.typicode.com/todos

import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export function Todos({ todoList }) {
  console.log(todoList);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setTodos(json))
      .catch((error) => alert(error));
  }
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <input type="checkbox" id={todo.id} name={todo.id} />
            <label htmlFor={todo.id}>{todo.title}</label>
          </div>
        );
      })}
    </div>
  );
}

Todos.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object),
};
