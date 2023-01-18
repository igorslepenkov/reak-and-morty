import { createSelector } from "reselect";
import { ICharactersInitialState } from "../features";
import { RootState } from "../store";

const selectCharactersReducer = (state: RootState): ICharactersInitialState =>
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
