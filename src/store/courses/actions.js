import {
  COURSES_FETCH_REQUESTED,
  COURSES_FETCH_SUCCEEDED,
  COURSES_FETCH_FAILED,
} from './actionTypes';

export const requestCourses = (params) => ({
  type: COURSES_FETCH_REQUESTED,
  payload: { params },
});

export const requestCoursesSuccess = (response) => ({
  type: COURSES_FETCH_SUCCEEDED,
  payload: { response },
});

export const requestCoursesError = (error) => ({
  type: COURSES_FETCH_FAILED,
  payload: { error },
});
