import { createStore } from "redux";
import { CREATE, DELETE, UPDATE } from "./types";

const defaultState = {
  phoneBook: [
    { id: 1, name: "Max", phoneNamber: "063738233" },
    { id: 2, name: "Max", phoneNamber: "063738233" },
    { id: 3, name: "Max", phoneNamber: "063738233" },
  ],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE:
      return { ...state, phoneBook: [...state.phoneBook, action.payload] };
    case DELETE:
      return {
        ...state,
        phoneBook: state.phoneBook.filter(
          (phone) => phone.id !== action.payload
        ),
      };
    case UPDATE:
      return tutorials.map((tutorial) => {
        if (tutorial.id === payload.id) {
          return {
            ...tutorial,
            ...payload,
          };
        } else {
          return tutorial;
        }
      });
    default:
      return state;
  }
};

export const store = createStore(reducer);
