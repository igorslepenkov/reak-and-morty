import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router";
import { GlobalStyles } from "./ui";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
