import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TodoList = () => {
  const { todos, deleteTodo } = useContext(GlobalContext);

  return (
    <ul className="list-group mb-4">
      {todos.map((todo) => (
        <li className="list-group-item" key={todo.id}>
          <div>{todo.title}</div>
          <button
            className="btn btn-danger"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
