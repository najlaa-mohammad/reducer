// import axios from "axios";
// import { useCountContext } from "./components/Context/CountContext";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import UserForm from "./components/UserForm";

function App() {
  // const { count } = useCountContext();
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/* <h1>Count - {count} </h1> */}
      {/* <ActionSwitch /> */}
      {/* <ComponentA />
      <ComponentB />
      <ComponentC /> */}
      <UserForm />
  
    </div>
  );
}

export default App;
