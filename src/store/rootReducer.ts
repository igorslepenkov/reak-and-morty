import { combineReducers } from "@reduxjs/toolkit";
import { charactersReducer } from "./characters";

export const rootReducer = combineReducers({
  characters: charactersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
