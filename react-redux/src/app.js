import React from "react";
import { render } from "react-dom";
import {createStore} from "redux";
import TodoList from "./components";
import reducer from "./reducer";

const store = createStore(reducer);

const dummyTodos = [
  { id: 0, isDone: true,  text: "make components" },
  { id: 1, isDone: false, text: "design actions" },
  { id: 2, isDone: false, text: "implement reducer" },
  { id: 3, isDone: false, text: "connect components" }
];

render(
  <TodoList todoList={store.getState()} />,
  document.getElementById("app")
);