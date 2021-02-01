import { all, spawn } from 'redux-saga/effects';
import courseSagas from './courses/sagas';

export default function* rootSaga() {
  yield all([courseSagas].map(spawn));
}
