import { launchDataWatcher } from "./launchDataSaga";
import { all, fork } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([fork(launchDataWatcher)]);
  // code after all-effect
}
