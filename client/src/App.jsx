import React, { useContext } from "react";
import { Outlet } from "react-router";
import SecondaryNavbar from "./layouts/Header/SecondaryNavbar";
import { ThemeContext } from "./contexts/Theme/ThemeContext";
import MasterFooter from "./layouts/Footer/MasterFooter";

const App = () => {
  const { themeState } = useContext(ThemeContext);

  return (
    <React.Fragment>
      <section className="lg:w-full lg:mx-auto lg:min-h-screen  lg:px-[100px] my-1">
        <SecondaryNavbar />
        <main
          className={
            themeState.theme === "dark"
              ? "!bg-slate-900/92 w-full min-h-screen py-2"
              : "!bg-slate-100 w-full min-h-screen py-2"
          }
        >
          <Outlet />
        </main>
        <MasterFooter />
      </section>
    </React.Fragment>
  );
};

export default App;
