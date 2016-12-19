import Immutable from 'immutable';
import { List } from 'immutable';
import * as types from '../actions/actionTypes';

const initialState = Immutable.List([]);

const meteors = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'GET_METEORS':
      return Immutable.List(data);
  }
  return state;
};

export default meteors;
