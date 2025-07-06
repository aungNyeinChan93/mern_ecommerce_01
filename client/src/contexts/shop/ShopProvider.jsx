import React from "react";
import ShopContext from "./ShopContext";

const ShopProvider = ({ children }) => {
  const value = {
    name: "shop provider",
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopProvider;
