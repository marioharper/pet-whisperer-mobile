import { connect } from 'react-redux';
import Screen from './components/screen';
import { updatePet } from '../../actions/pets';

const mapStateToProps = (state, ownProps) => ({
  pet: state.pets.find(pet => (pet.id === ownProps.navigation.state.params.pet.id)),
});

const mapDispatchToProps = dispatch => ({
  updatePet: pet => dispatch(updatePet(pet)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
