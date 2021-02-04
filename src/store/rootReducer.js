import { combineReducers } from 'redux';

import courses from './courses/reducer';
import favorite from './favorite/reducer';

export default combineReducers({
  courses,
  favorite,
});
