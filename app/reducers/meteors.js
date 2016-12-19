import Immutable from 'immutable';
import { List } from 'immutable';
import * as types from '../actions/actionTypes';

const initialState = {
  meteors: []
};

const meteors = (state = initialState, action) => {
  const { meteors } = state;
  const { type, data } = action;

  switch (type) {
    case 'GET_METEORS':
      return {
        ...state,
        meteors: Immutable.List(data)
      };
  }
  return state;
};

export default meteors;
