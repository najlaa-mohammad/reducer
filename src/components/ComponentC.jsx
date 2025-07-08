import React from "react";
import { initialState } from "../reducer";
import { useCountContext } from "./Context/CountContext";

const ComponentC = () => {
  const { dispatch } = useCountContext();

  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch({ type: "increment", value: 3 })}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", value: 3 })}
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

export default ComponentC;
