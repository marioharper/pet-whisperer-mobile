import * as types from '../constants/actions';
import initialState from './initialState';

export default (state = initialState.pets, action) => {
  switch (action.type) {
    case types.GET_PETS_SUCCESS:
      return [].concat(action.pets);

    default:
      return state;
  }
};
