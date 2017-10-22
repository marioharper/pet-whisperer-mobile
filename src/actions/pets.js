import * as petApi from '../api/pets';
import * as actionTypes from '../constants/actions';

export function getPets() {
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_PETS });

    return petApi.getPets()
      .then(pets => dispatch({ type: actionTypes.GET_PETS_SUCCESS, pets }));
  };
}

export function updatePet(thePet) {
  return (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_PET });

    return petApi.updatePet(thePet)
      .then(pet => dispatch({ type: actionTypes.UPDATE_PET_SUCCESS, pet }));
  };
}
