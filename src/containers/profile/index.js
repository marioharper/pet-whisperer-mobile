import { connect } from 'react-redux';
import Screen from './components/screen';
import { logout } from '../../actions/auth';

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logout());
  },
});

export default connect(null, mapDispatchToProps)(Screen);
