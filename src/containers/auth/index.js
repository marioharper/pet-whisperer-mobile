import { connect } from 'react-redux';
import Screen from './components/screen';
import { login } from '../../actions/auth';

const mapDispatchToProps = dispatch => ({
  login() {
    dispatch(login());
  },
});

export default connect(null, mapDispatchToProps)(Screen);
