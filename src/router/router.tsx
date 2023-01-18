import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { App } from "../App";
import {
  EpisodesPage,
  Homepage,
  CharactersPage,
  LocationsPage,
} from "../pages";
import { ROUTE } from "./routes";

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.Home} element={<App />}>
      <Route index element={<Homepage />} />
      <Route path={ROUTE.Characters} element={<CharactersPage />} />
      <Route path={ROUTE.Locations} element={<LocationsPage />} />
      <Route path={ROUTE.Episodes} element={<EpisodesPage />} />
    </Route>
  )
);
