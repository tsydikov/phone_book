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
        console.log(action.payload);
      return state.phoneBook.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...action.payload,
          };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

export const store = createStore(reducer);
