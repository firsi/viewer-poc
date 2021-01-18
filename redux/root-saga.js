import { all } from "redux-saga/effects";
import placeSaga from "./place/sagas";
import timeseriesSaga from "./timeseries/sagas";

export default function* rootSaga(getState) {
  yield all([placeSaga(), timeseriesSaga()]);
}
