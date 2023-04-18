import React, { useState, useContext } from "react";
import { GlobalContext } from "./context/GlobalState";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const { addTodo } = useContext(GlobalContext);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
    };
    addTodo(newTodo);
    setTitle("");
  };

  return (
    <div className="container my-4 py-6  bg-dark rounded ">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center mb-4 text-white">Todo List</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a new todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <button className="btn btn-primary btn-block mt-1 mb-4">
              Add Todo
            </button>
          </form>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
