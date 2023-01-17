import { AnyAction } from "redux";
import { ICharacter, IGetAllCharactersSuccess } from "../../types/characters";
import {
  fetchCharactersFailed,
  fetchCharactersStart,
  fetchCharactersSuccess,
} from "./charactersActions";
import { IError } from "../../types";

export interface ICharactersState {
  readonly characters: ICharacter[] | null;
  readonly info: IGetAllCharactersSuccess["info"] | null;
  readonly isLoading: boolean;
  readonly error: IError | null;
}

const charactersInitialState: ICharactersState = {
  characters: [],
  info: null,
  isLoading: false,
  error: null,
};

export const charactersReducer = (
  state = charactersInitialState,
  action: AnyAction
): ICharactersState => {
  if (fetchCharactersStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCharactersSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      characters: action.payload.results,
      info: action.payload.info ? action.payload.info : null,
    };
  }

  if (fetchCharactersFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
