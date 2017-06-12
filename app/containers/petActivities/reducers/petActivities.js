import * as types from '../constants/actions';

export default (state = [], action) => {
  switch (action.type) {
    case types.GET_PET_ACTIVITIES_SUCCESS:
      return [].concat(action.activities);

    default:
      return state;
  }
};
