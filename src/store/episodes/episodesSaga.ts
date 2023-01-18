import { AnyAction } from "@reduxjs/toolkit";
import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import { rickAndMortyApi } from "../../services";
import {
  EpisodesActionType,
  fetchEpisodesSuccess,
  fetchEpisodesFailed,
} from "./episodesActions";

export function* fetchEpisodesAsync(action: AnyAction) {
  try {
    const episodesResponse = yield* call(
      rickAndMortyApi.getAllEpisodes,
      action.payload
    );

    if (episodesResponse) {
      yield* put(fetchEpisodesSuccess(episodesResponse));
    }
  } catch (err: any) {
    if ("error" in err) {
      yield* put(fetchEpisodesFailed(err));
    }
  }
}

export function* onFetchEpisodes() {
  yield* takeLatest(EpisodesActionType.FetchEpisodesStart, fetchEpisodesAsync);
}

export function* episodesSaga() {
  yield* all([call(onFetchEpisodes)]);
}
