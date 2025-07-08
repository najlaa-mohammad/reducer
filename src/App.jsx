// import { useReducer } from "react";

import { useEffect, useReducer } from "react";
import "./App.css";
import ActionSwitch from "./components/ActionSwitch";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import axios from "axios";

// import { useCountContext } from "./components/Context/CountContext";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PENDING":
      return {
        loading: true,
        error: "",
        posts: [],
        
      };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        posts: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: action.payload?.message || "Something went wrong",
        posts: [],
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const { count } = useCountContext();
  useEffect(() => {
    const getPosts = async () => {
      try {
        dispatch({ type: "FETCH_PENDING" });
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (res.status === 200)
          dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        res.data;
        console.log(res.data);
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error });
        console.log(error);
      }
    };
    getPosts();
  }, []);
  return (
    <div>
      {state.loading && <p>loading...</p>}
      {!state.loading && state.error && <p>error:{state.error}</p>}
      {!state.loading && state.posts && (
        <ul>
          {state.posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}

      <h1>hello</h1>
      {/* <h1>Count - {count} </h1> */}
      {/* <ActionSwitch/> */}
      {/* <ComponentA />
      <ComponentB />
      <ComponentC /> */}
    </div>
  );
}

export default App;
