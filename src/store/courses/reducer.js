import {
  FAVORITE_SET_SUCCEEDED,
  FAVORITE_UNSET_SUCCEEDED,
} from 'store/favorite/actionTypes';
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

    case FAVORITE_SET_SUCCEEDED: {
      const courseId = action.payload.response.course_id;
      return {
        ...state,
        courseList: state.courseList
          ? state.courseList.map((course) =>
              course.id !== courseId ? course : { ...course, favorite: true }
            )
          : state.courseList,
      };
    }

    case FAVORITE_UNSET_SUCCEEDED: {
      const courseId = action.payload.response.course_id;
      return {
        ...state,
        courseList: state.courseList
          ? state.courseList.map((course) =>
              course.id !== courseId ? course : { ...course, favorite: false }
            )
          : state.courseList,
      };
    }

    default:
      return state;
  }
}
