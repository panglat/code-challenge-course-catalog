import {
  FAVORITE_SET_REQUESTED,
  FAVORITE_SET_SUCCEEDED,
  FAVORITE_SET_FAILED,
  FAVORITE_UNSET_REQUESTED,
  FAVORITE_UNSET_SUCCEEDED,
  FAVORITE_UNSET_FAILED,
} from './actionTypes';

export const setFavorite = (params) => ({
  type: FAVORITE_SET_REQUESTED,
  payload: { params },
});

export const setFavoriteSuccess = (response) => ({
  type: FAVORITE_SET_SUCCEEDED,
  payload: { response },
});

export const setFavoriteError = (error) => ({
  type: FAVORITE_SET_FAILED,
  payload: { error },
});

export const unsetFavorite = (params) => ({
  type: FAVORITE_UNSET_REQUESTED,
  payload: { params },
});

export const unsetFavoriteSuccess = (response) => ({
  type: FAVORITE_UNSET_SUCCEEDED,
  payload: { response },
});

export const unsetFavoriteError = (error) => ({
  type: FAVORITE_UNSET_FAILED,
  payload: { error },
});
