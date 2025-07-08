import { useReducer } from "react";
import './ActionSwitch.css'

const initialcountonestate = 0;
const initialcounttwostate = 2;

// الدالة المختصة بتحديث الحالة
const reducer = (state, action) => {
  console.log("action receve", action);
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

const ActionSwitch = () => {
  const [countone, dispatchOne] = useReducer(reducer, initialcountonestate);
  const [counttwo, dispatchTwo] = useReducer(reducer, initialcounttwostate);
  return (
    <div>
      <div className="countOne">
        <h1>Count One - {countone}</h1>
        <button onClick={() => dispatchOne({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatchOne({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button
          onClick={() =>
            dispatchOne({
              type: "reset",
              value: initialcountonestate,
            })
          }
        >
          reset
        </button>
      </div>

      <div className="countTow">
        <h1>counttwo - {counttwo}</h1>
        <button onClick={() => dispatchTwo({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatchTwo({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button
          onClick={() =>
            dispatchTwo({
              type: "reset",
              value: initialcounttwostate,
            })
          }
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default ActionSwitch;
