// reducer.js
export const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return action.value;
    default:
      return state;
  }
};

export default reducer;
