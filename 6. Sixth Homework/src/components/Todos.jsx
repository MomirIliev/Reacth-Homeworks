import PropTypes from "prop-types";

export const Todos = ({ listOfTodos, markTodoAsDone, deleteTodo }) => {
  {
    // if (listOfTodos.filter((todo) => todo.id !== "").length === 0) {          => First Solution which check if there are only empty objects in state

    if (listOfTodos.length === 0) {
      return <h3>There are not added item in the array yet!</h3>;
    } else {
      return (
        <table border={1} className="todo-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listOfTodos.map((todo, index) => {
              console.log(todo);
              if (todo.text !== "") {
                return (
                  <tr key={index}>
                    <td>{todo.id}</td>
                    <td>{todo.text}</td>
                    <td>
                      <input
                        type="checkbox"
                        value={todo.done}
                        checked={todo.done}
                        onChange={() => {
                          markTodoAsDone(todo);
                        }}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          deleteTodo(todo);
                        }}
                      >
                        Delete
                      </button>
                      <button>Edit</button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      );
    }
  }
};

Todos.propTypes = {
  listOfTodos: PropTypes.arrayOf(PropTypes.object),
  markTodoAsDone: PropTypes.func,
  deleteTodo: PropTypes.func,
};
