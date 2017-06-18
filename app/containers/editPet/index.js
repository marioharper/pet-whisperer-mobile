import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Screen from './components/screen';
import { getPetActivities } from '../../actions/activities';

const mapStateToProps = (state, ownProps) => ({
  pet: state.pets.find(pet => (pet.id === ownProps.navigation.state.params.pet.id)),
});

const mapDispatchToProps = dispatch => ({
  getPetActivities: petId => dispatch(getPetActivities(petId)),
  createPetActivityScreen: (pet, type) => dispatch(NavigationActions.navigate({
    routeName: 'CreatePetActivity',
    params: { pet, type },
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
