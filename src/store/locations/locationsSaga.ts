import { AnyAction } from "@reduxjs/toolkit";
import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import { rickAndMortyApi } from "../../services";
import {
  LocationsActionType,
  fetchLocationsSuccess,
  fetchLocationsFailed,
} from "./locationsActions";

export function* fetchLocationsAsync(action: AnyAction) {
  try {
    const locationsResponse = yield* call(
      rickAndMortyApi.getAllLocations,
      action.payload
    );

    if (locationsResponse) {
      yield* put(fetchLocationsSuccess(locationsResponse));
    }
  } catch (err: any) {
    if ("error" in err) {
      yield* put(fetchLocationsFailed(err));
    }
  }
}

export function* onFetchLocations() {
  yield* takeLatest(
    LocationsActionType.FetchLocationsStart,
    fetchLocationsAsync
  );
}

export function* locationsSaga() {
  yield* all([call(onFetchLocations)]);
}
