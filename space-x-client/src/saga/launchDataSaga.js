import { LAUNCH_DATA_ASYNC, LAUNCH_DATA } from "../actions/types";
import { takeLatest, put, call } from "redux-saga/effects";
import axios from 'axios';

function callLauncDataApi(action) {
  return axios.get(action.payload);
}

function* launchDataAsync(action) {
    const payload = yield call(callLauncDataApi, action);
    yield put({ type: LAUNCH_DATA_ASYNC, payload: payload.data })
}

export function* launchDataWatcher() {
  yield takeLatest(LAUNCH_DATA, launchDataAsync);
}
