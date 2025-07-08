import React from "react";
import { useCountContext } from "./Context/CountContext";
import { initialState } from "../reducer";

const ComponentB = () => {
  const { dispatch } = useCountContext();
  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch({ type: "increment", value: 2 })}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", value: 2 })}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "reset", value: initialState })}
      >
        Reset
      </button>
    </div>
  );
};

export default ComponentB;
