import { call, put, takeLatest, all } from 'redux-saga/effects';
import { COURSES_FETCH_REQUESTED } from './actionTypes';
import { requestCoursesSuccess, requestCoursesError } from './actions';
import { getCourses } from 'services/courseService';

function* fetchCourses(action) {
  try {
    const result = yield call(() => getCourses(action.payload.params));
    yield put(requestCoursesSuccess(result));
  } catch (e) {
    yield put(requestCoursesError(e.message));
  }
}

function* watchFetchCourses() {
  yield takeLatest(COURSES_FETCH_REQUESTED, fetchCourses);
}

export default function* sagas() {
  yield all([watchFetchCourses()]);
}
