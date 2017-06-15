import * as types from '../constants/actions';
import initialState from './initialState';

export default (state = initialState.pets, action) => {
  switch (action.type) {
    case types.GET_PETS_SUCCESS:
      return [].concat(action.pets);

    case types.CREATE_PET_ACTIVITY_SUCCESS:
      return state.map((pet) => {
        if (pet.id !== action.petId) {
          return pet;
        }

        return {
          ...pet,
          activities: [
            action.activity,
            ...pet.activities,
          ],
        };
      });

    case types.GET_PET_ACTIVITIES_SUCCESS:
      return state.map((pet) => {
        if (pet.id !== action.petId) {
          return pet;
        }

        return {
          ...pet,
          activities: action.activities,
        };
      });

    default:
      return state;
  }
};
