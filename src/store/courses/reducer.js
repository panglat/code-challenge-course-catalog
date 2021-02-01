/**
 * @file Manages Users Redux reducer.
 * @module redux-store/users/Reducer
 */

import {
  COURSES_FETCH_REQUESTED,
  COURSES_FETCH_SUCCEEDED,
  COURSES_FETCH_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  error: null,
  courseList: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case COURSES_FETCH_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case COURSES_FETCH_SUCCEEDED:
      return {
        ...state,
        loading: false,
        error: null,
        courseList: [...action.payload.response],
      };

    case COURSES_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
