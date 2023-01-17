import { IError } from "../../types";
import { IGetAllCharactersSuccess } from "../../types/characters";
import {
  Action,
  ActionWithPayload,
  createActionObject,
  withMatcher,
} from "../../utils/reducers";

export enum CharactersActionType {
  FetchCharactersStart = "characters/fetchCharactersStart",
  FetchCharactersSuccess = "characters/fetchCharactersSuccess",
  FetchCharactersFailed = "characters/fetchCharactersFailed",
}

export type FetchCharactersStartAction =
  Action<CharactersActionType.FetchCharactersStart>;

export type FetchCharactersSuccessAction = ActionWithPayload<
  CharactersActionType.FetchCharactersSuccess,
  IGetAllCharactersSuccess
>;

export type FetchCharactersFailedAction = ActionWithPayload<
  CharactersActionType.FetchCharactersFailed,
  IError
>;

export const fetchCharactersStart = withMatcher(
  (page: number): FetchCharactersStartAction =>
    createActionObject(CharactersActionType.FetchCharactersStart, page)
);

export const fetchCharactersSuccess = withMatcher(
  (
    charactersResponse: IGetAllCharactersSuccess
  ): FetchCharactersSuccessAction =>
    createActionObject(
      CharactersActionType.FetchCharactersSuccess,
      charactersResponse
    )
);

export const fetchCharactersFailed = withMatcher((errorObject: IError) =>
  createActionObject(CharactersActionType.FetchCharactersFailed, errorObject)
);
