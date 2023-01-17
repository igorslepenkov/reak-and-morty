import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./router";
import { GlobalStyles } from "./ui";

import { store } from "./store";
import { Spinner } from "./components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <GlobalStyles />
        <RouterProvider router={appRouter} />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
