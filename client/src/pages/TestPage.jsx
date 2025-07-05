import React, { useContext } from "react";
import { ThemeContext } from "../contexts/Theme/ThemeContext";

const TestPage = () => {
  const { themeState, themeDispatch } = useContext(ThemeContext);
  return (
    <React.Fragment>
      <section>
        <h1>Test Page || {themeState.theme}</h1>

        <button onClick={() => themeDispatch({ type: "CHANGE_THEME" })}>
          Change Theme
        </button>
      </section>
    </React.Fragment>
  );
};

export default TestPage;
