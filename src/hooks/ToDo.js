import React from "react";
import { ACTIONS } from "./ToDos";
import "./ToDo.scss";

const ToDo = ({ index, todo, dispatch }) => {
  return (
    <div className="todo__element">
      <div>
        {index + 1}. &nbsp;
        <span
          style={{
            color: todo.complete ? "#AAA" : "#000",
            textDecoration: todo.complete ? "line-through" : "none",
          }}
        >
          {todo.name}
        </span>
      </div>
      &nbsp;&nbsp;
      <div className="todo__buttons">
        <button
          className="btn btn-info"
          onClick={() => {
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
          }}
        >
          Toggle
        </button>
        &nbsp;
        <button
          className="btn btn-danger"
          onClick={() => {
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } });
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDo;
