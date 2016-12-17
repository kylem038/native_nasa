import {types} from './actionTypes';

export const actionCreators = {
  getMeteors: (data) => {
    return {type: types.GET_METEORS, data: data};
  }
};
