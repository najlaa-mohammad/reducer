import { useCountContext } from "../components/Context/CountContext";

const useCount = () => {
  const { dispatch } = useCountContext();

  const increment = () => dispatch({ type: "increment", value: 1 });
  const decrement = () => dispatch({ type: "decrement", value: 1 });
  const reset = () => dispatch({ type: "reset",value:0 });

  return {
    increment,
    decrement,
    reset,
    dispatch,
  };
};

export default useCount;
