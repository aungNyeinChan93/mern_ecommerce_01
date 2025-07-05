import React from "react";
import SecondaryNavbar from "./Header/SecondaryNavbar";

const MasterLayout = ({ children }) => {
  return (
    <React.Fragment>
      <section>
        <SecondaryNavbar />
        nav
        <main>{children}</main>
      </section>
    </React.Fragment>
  );
};

export default MasterLayout;
