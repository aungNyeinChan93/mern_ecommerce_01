import React, { useReducer } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const initialValue = {
    theme: "light",
  };

  const reducer = (state, action) => {
    if (action.type === "CHANGE_THEME") {
      if (state.theme === "dark") {
        return { ...state, theme: "light" };
      }
      return { ...state, theme: "dark" };
    }
    return state;
  };

  const [themeState, themeDispatch] = useReducer(reducer, initialValue);

  return (
    <ThemeContext.Provider value={{ themeState, themeDispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
