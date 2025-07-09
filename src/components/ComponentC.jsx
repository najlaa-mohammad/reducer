
import useCount from "../hooks/useCount";


const ComponentC = () => {
  // <h1>{dispatch}</h1>;
  const { increment, decrement, reset } = useCount();

  return (
    <div>
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

export default ComponentC;
