import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Screen from './components/screen';
import { createPetActivity } from '../../actions/activities';

const mapDispatchToProps = dispatch => ({
  createPetActivity: (petId, activity) => dispatch(createPetActivity(petId, activity))
    .then(() => dispatch(NavigationActions.back())),
});

export default connect(null, mapDispatchToProps)(Screen);
