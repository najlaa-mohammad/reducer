
import useCount from "../hooks/useCount";
// import { useCountContext } from "./Context/CountContext";
// import { initialState } from "../reducer";

const ComponentA = () => {
  const { increment, decrement, reset } = useCount();

  return (
    <div>
      {/* <h1>{dispatch}</h1> */}
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default ComponentA;
