import { combineReducers } from 'redux';
import user from './user';
import meteors from './meteors';

const reducers = combineReducers({
  user,
  meteors
});

export default reducers;
