import { all, call } from "typed-redux-saga/macro";

import { charactersSaga } from "./characters";

export function* rootSaga() {
  yield* all([call(charactersSaga)]);
}
