import activitiesApi from '../api/activities';
import * as actionTypes from '../constants/actions';

export function getPetActivities(petId) {
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_PET_ACTIVITIES });

    return activitiesApi.getPetActivities(petId)
      .then(activities => dispatch({ type: actionTypes.GET_PET_ACTIVITIES_SUCCESS, activities }));
  };
}
