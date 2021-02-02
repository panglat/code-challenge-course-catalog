import {
  FAVORITE_SET_REQUESTED,
  FAVORITE_SET_SUCCEEDED,
  FAVORITE_SET_FAILED,
  FAVORITE_UNSET_REQUESTED,
  FAVORITE_UNSET_SUCCEEDED,
  FAVORITE_UNSET_FAILED,
} from './actionTypes';

const initialState = {
  setFavorite: {
    loading: false,
    error: null,
    response: null,
  },
  unsetFavorite: {
    loading: false,
    error: null,
    response: null,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FAVORITE_SET_REQUESTED:
      return {
        ...state,
        setFavorite: {
          loading: true,
          error: null,
          response: null,
        },
      };

    case FAVORITE_SET_SUCCEEDED:
      return {
        ...state,
        setFavorite: {
          loading: false,
          error: null,
          response: action.payload.response,
        },
      };

    case FAVORITE_SET_FAILED:
      return {
        ...state,
        setFavorite: {
          loading: false,
          error: action.payload.error,
          response: null,
        },
      };

    case FAVORITE_UNSET_REQUESTED:
      return {
        ...state,
        unsetFavorite: {
          loading: true,
          error: null,
          response: null,
        },
      };

    case FAVORITE_UNSET_SUCCEEDED:
      return {
        ...state,
        unsetFavorite: {
          loading: false,
          error: null,
          response: action.payload.response,
        },
      };

    case FAVORITE_UNSET_FAILED:
      return {
        ...state,
        unsetFavorite: {
          loading: false,
          error: action.payload.error,
          response: null,
        },
      };

    default:
      return state;
  }
}
