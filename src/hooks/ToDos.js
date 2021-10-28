// import React, { useReducer } from "react";
import React, { useState, useReducer } from "react";
import ToDo from "./ToDo.js";
import "./ToDos.scss";

const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "DELETE_TODO",
};
export { ACTIONS };

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return { ...todo, complete: todo.complete };
        }
      });

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

const initTodos = [
  { id: 1, name: "Go to Shop", complete: false },
  { id: 2, name: "Polish Door", complete: false },
  { id: 3, name: "Doctor's Appointment", complete: true },
  { id: 4, name: "Build Car", complete: true },
  { id: 5, name: "Eat Apple", complete: false },
];

const ToDos = () => {
  const [todos, dispatch] = useReducer(reducer, initTodos);
  const [name, setName] = useState(() => "");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  console.log("ToDos");
  return (
    <div className="form-inline todos__wrapper">
      <h4>ToDo Application</h4>
      <form onSubmit={handleSubmit}>
        <div class="form-group mb-2">
          <input
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          &nbsp;
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <br />
      <div>
        {todos.map((todo, index) => {
          return (
            <ToDo
              index={index}
              todo={todo}
              key={todo.id}
              dispatch={dispatch}
            ></ToDo>
          );
        })}
      </div>
      <br />
      <br />
      Source Code{" "}
      <a target="_blank" href="https://github.com/sankethosalli/reactjs-todo/">
        Here
      </a>
    </div>
  );
};

export default ToDos;
