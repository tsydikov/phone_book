import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

const defaultState = [
  { id: 1, name: "Max", phoneNamber: "063738233" },
  { id: 2, name: "Max", phoneNamber: "063738233" },
  { id: 3, name: "Max", phoneNamber: "063738233" },
];

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CREATE":
      return { ...state, state: state.push(action.payload) };
    case "DELETE":
      return {
        ...state,
        state: state.filter((phone) => phone.id !== action.payload && phone),
      };
    case "UPDATE":
      return state;
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
