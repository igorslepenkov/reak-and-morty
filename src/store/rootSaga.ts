import { all, call } from "typed-redux-saga/macro";

import { charactersSaga } from "./characters";
import { episodesSaga } from "./episodes";
import { locationsSaga } from "./locations";

export function* rootSaga() {
  yield* all([call(charactersSaga), call(locationsSaga), call(episodesSaga)]);
}
