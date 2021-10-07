import { createStore } from "redux";

const CREATE = "CREATE";
const UPDATE = "UPDATE";
const DELETE = "DELETE";

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
      return { ...state, state: state.phoneBook.push(action.payload) };
    case UPDATE:
      return {
        ...state,
        state: state.phoneBook.filter(
          (phone) => phone.id !== action.payload && phone
        ),
      };
    case DELETE:
      return state;
    default:
      return state;
  }
};

export const store = createStore(reducer);
