import { AnyAction } from "@reduxjs/toolkit";
import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import { rickAndMortyApi } from "../../services";
import {
  CharactersActionType,
  fetchCharactersSuccess,
  fetchCharactersFailed,
} from "./charactersActions";

export function* fetchCharactersAsync(action: AnyAction) {
  try {
    const charactersResponse = yield* call(
      rickAndMortyApi.getAllCharacters,
      action.payload
    );
    if (charactersResponse) {
      yield* put(fetchCharactersSuccess(charactersResponse));
    }
  } catch (err: any) {
    if ("error" in err) {
      yield* put(fetchCharactersFailed(err));
    }
  }
}

export function* onFetchCharacters() {
  yield* takeLatest(
    CharactersActionType.FetchCharactersStart,
    fetchCharactersAsync
  );
}

export function* charactersSaga() {
  yield* all([call(onFetchCharacters)]);
}
