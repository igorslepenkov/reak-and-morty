import { combineReducers } from "@reduxjs/toolkit";
import { charactersReducer } from "./characters";
import { locationsReducer } from "./locations";

export const rootReducer = combineReducers({
  characters: charactersReducer,
  locations: locationsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
