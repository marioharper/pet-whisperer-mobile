import * as activitiesApi from '../api/activities';
import * as actionTypes from '../constants/actions';

export function getPetActivities(petId) {
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_PET_ACTIVITIES });

    return activitiesApi.getPetActivities(petId)
      .then(activities => dispatch({
        type: actionTypes.GET_PET_ACTIVITIES_SUCCESS,
        petId,
        activities,
      }));
  };
}

export function createPetActivity(petId, activity) {
  return (dispatch) => {
    dispatch({ type: actionTypes.CREATE_PET_ACTIVITY });

    return activitiesApi.createPetActivity(petId, activity)
      .then(createdActivity => dispatch({
        type: actionTypes.CREATE_PET_ACTIVITY_SUCCESS,
        petId,
        activity: createdActivity,
      }));
  };
}
