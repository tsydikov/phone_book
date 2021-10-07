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

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CREATE":
      return { ...state, state: state.phoneBook.push(action.payload) };
    case "DELETE":
      return {
        ...state,
        state: state.phoneBook.filter(
          (phone) => phone.id !== action.payload && phone
        ),
      };
    case "UPDATE":
      return state;
    default:
      return state;
  }
};
