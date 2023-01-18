import { combineReducers } from "@reduxjs/toolkit";
import { charactersReducer } from "./characters";
import { episodesReducer } from "./episodes";
import { locationsReducer } from "./locations";

export const rootReducer = combineReducers({
  characters: charactersReducer,
  locations: locationsReducer,
  episodes: episodesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
