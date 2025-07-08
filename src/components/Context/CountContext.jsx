import React, { createContext, useReducer, useContext } from "react";
import reducer, { initialState } from "../../reducer";

// إنشاء السياق
const CountContext = createContext({});

// مكون مزود السياق
const CountContextProvider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ count, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContextProvider;
// eslint-disable-next-line react-refresh/only-export-components
export const useCountContext = () => {
  return useContext(CountContext);
};
