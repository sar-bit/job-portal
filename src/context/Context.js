import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducers";

const INITIAL_STATES = {
    selectedList: JSON.parse(localStorage.getItem("selectedList")) || [],
};

export const Context = createContext(INITIAL_STATES);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATES);

  useEffect(() => {
    localStorage.setItem("selectedList", JSON.stringify(state.selectedList));
  }, [state.selectedList]);
  return (
    <Context.Provider
      value={{
        selectedList: state.selectedList,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
