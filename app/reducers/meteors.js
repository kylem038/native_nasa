import * as types from '../actions/actionTypes';

const initialState = [];

const meteors = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'GET_METEORS':
      return data;
  }
  return state;
};

export default meteors;
