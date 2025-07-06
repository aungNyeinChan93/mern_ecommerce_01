import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router";
import ThemeProvider from "./contexts/Theme/ThemeProvider";
import ShopProvider from "./contexts/shop/ShopProvider";
import { Provider } from "react-redux";
import store from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ShopProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ShopProvider>
    </ThemeProvider>
  </StrictMode>
);
