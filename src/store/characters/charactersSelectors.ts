import { createSelector } from "reselect";
import { RootState } from "../rootReducer";
import { ICharactersState } from "./charactersReducer";

const selectCharactersReducer = (state: RootState): ICharactersState =>
  state.characters;

export const selectCharacters = createSelector(
  [selectCharactersReducer],
  (charactersSlice) => charactersSlice.characters
);

export const selectCharactersInfo = createSelector(
  [selectCharactersReducer],
  (charactersSlice) => charactersSlice.info
);

export const selectCharactersError = createSelector(
  [selectCharactersReducer],
  (charactersSlice) => charactersSlice.error
);

export const selectCharactersisLoading = createSelector(
  [selectCharactersReducer],
  (charactersSlice) => charactersSlice.isLoading
);
