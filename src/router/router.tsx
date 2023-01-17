import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { App } from "../App";
import { Homepage } from "../pages";
import { CharactersPage } from "../pages/CharactersPage";
import { ROUTE } from "./routes";

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.Home} element={<App />}>
      <Route index element={<Homepage />} />
      <Route path={ROUTE.Characters} element={<CharactersPage />} />
    </Route>
  )
);
