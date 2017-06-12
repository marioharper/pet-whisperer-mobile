import { connect } from 'react-redux';
import Screen from './components/screen';
import { getPetActivities } from './actions/activities';

const mapDispatchToProps = dispatch => ({
  getPetActivities: petId => dispatch(getPetActivities(petId)),
});

export default connect(null, mapDispatchToProps)(Screen);
