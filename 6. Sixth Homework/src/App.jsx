import { useState, useEffect } from "react";
import { Todos } from "./components/Todos";
import "./css/App.css";

export function App() {
  const [car, setCar] = useState({ model: "BMW", year: 2010 });
  const [days, setDays] = useState(["Monday", "Tuesday", "Wednesday"]);
  const [person, setPerson] = useState({ firstName: "", lastName: "" });
  const [todos, setTodos] = useState([
    // { id: 1, text: "Learn React", done: false },
    // { id: 2, text: "Eat Dinner", done: false },
    // { id: 3, text: "Go to Sleep", done: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    console.log(person);
    console.log(todos);
  }, [person, todos]);

  function newCar() {
    setCar({
      ...car,
      model: "Yugo",
      // year: 2020,
    });
  }
  function addDays() {
    setDays(["Sunday", ...days, "Thursday"]);
  }

  function addNewTodo() {
    if (newTodo.trim() !== "") {
      let newObject = {
        id: randomId(),
        text: newTodo,
        done: false,
      };
      setTodos([...todos, newObject]);
      setNewTodo("");
    } else {
      alert(
        "No value has been entered\nPlease enter a value then submit the new Todo"
      );
    }
  }
  function markTodoAsDone(todo) {
    console.log(todo);
    setTodos([
      //iterator -> item
      ...todos.map(
        (item) =>
          item.id === todo.id //uslovot e najdi go kliknatiot element item.id (1,2,3) todo.id -> kliknatoto id na pr.2
            ? { id: item.id, text: item.text, done: !item.done } //koga ke go najdeme kliknatiot element go menuvame samo propertito za done vo sprotivno koristejki negacija
            : item //za site ostanati elementi ne gi cepkame odnosno go vrakjame orginalniot element nepromenet
      ),
    ]);
  }

  function randomId() {
    let id = Math.floor(Math.random() * 1000);
    console.log(id);
    let uniqueId = todos.filter((todo) => todo.id === id);
    if (uniqueId.length === 0) return id;
  }

  function deleteTodos(todo) {
    setTodos((current) =>
      current.filter((singleTodo) => singleTodo.id !== todo.id)
    );
  }

  // First Solution for deleting/changint the object in state
  // function deleteTodo(todo) {
  //   setTodos([
  //     ...todos.map((item) =>
  //       item.id === todo.id ? { id: "", text: "", done: "" } : item
  //     ),
  //   ]);
  // }

  return (
    <div id="app">
      <input
        id="enterTodo"
        type="text"
        placeholder="Enter Todo"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <button onClick={addNewTodo}>Add TODO </button>
      <Todos
        listOfTodos={todos}
        markTodoAsDone={markTodoAsDone}
        deleteTodo={deleteTodos}
      />
      <div className="inputName">
        <input
          type="text"
          placeholder="Enter First Name"
          value={person.firstName}
          onChange={(e) => {
            setPerson({ ...person, firstName: e.target.value });
          }}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Last Name"
          value={person.lastName}
          onChange={(e) => {
            setPerson({ ...person, lastName: e.target.value });
          }}
        />
      </div>
      <h2>Car:</h2>
      <p>Model:{car.model} </p>
      <p>Year: {car.year} </p>
      <button onClick={newCar}>Buy new Car</button>
      <hr />
      <ul>
        {days.map((day, i) => (
          <li key={i}>{day}</li>
        ))}
      </ul>
      <button onClick={addDays}>Add Days</button>
    </div>
  );
}
