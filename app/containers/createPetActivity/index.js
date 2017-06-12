import { connect } from 'react-redux';
import Screen from './components/screen';
import { createPetActivity } from '../../actions/activities';

const mapDispatchToProps = dispatch => ({
  createPetActivity: (petId, activity) => dispatch(createPetActivity(petId, activity)),
});

export default connect(null, mapDispatchToProps)(Screen);
