import {types} from './actionTypes';

export const actionCreators = {
  getMeteor: (data) => {
    return {type: types.GET_METEOR, data: data}
  }
};
