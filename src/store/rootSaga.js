import { all, spawn } from 'redux-saga/effects';
import courseSagas from './courses/sagas';
import favoriteSagas from './favorite/sagas';

export default function* rootSaga() {
  yield all([courseSagas, favoriteSagas].map(spawn));
}
