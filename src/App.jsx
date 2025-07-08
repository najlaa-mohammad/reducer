// import { useReducer } from "react";

import "./App.css";
import ActionSwitch from "./components/ActionSwitch";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import { useCountContext } from "./components/Context/CountContext";

function App() {
  const { count } = useCountContext();

  return (
    <div>
      <h1>Count - {count} </h1>
      {/* <ActionSwitch/> */}
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
  );
}

export default App;
