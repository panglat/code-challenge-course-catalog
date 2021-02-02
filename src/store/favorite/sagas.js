import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  FAVORITE_SET_REQUESTED,
  FAVORITE_UNSET_REQUESTED,
} from './actionTypes';
import {
  setFavoriteSuccess,
  setFavoriteError,
  unsetFavoriteSuccess,
  unsetFavoriteError,
} from './actions';
import {
  setFavorite as setFavoriteApi,
  unsetFavorite as unsetFavoriteApi,
} from 'services/favoriteService';

function* setFavorite(action) {
  try {
    const result = yield call(() => setFavoriteApi(action.payload.params));
    yield put(setFavoriteSuccess(result));
  } catch (e) {
    yield put(setFavoriteError(e.message));
  }
}

function* watchSetFavorite() {
  yield takeLatest(FAVORITE_SET_REQUESTED, setFavorite);
}

function* unsetFavorite(action) {
  try {
    const result = yield call(() => unsetFavoriteApi(action.payload.params));
    yield put(unsetFavoriteSuccess(result));
  } catch (e) {
    yield put(unsetFavoriteError(e.message));
  }
}

function* watchUnsetFavorite() {
  yield takeLatest(FAVORITE_UNSET_REQUESTED, unsetFavorite);
}

export default function* sagas() {
  yield all([watchSetFavorite(), watchUnsetFavorite()]);
}
