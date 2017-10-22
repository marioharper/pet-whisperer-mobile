import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Screen from './components/screen';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: routeName => dispatch(NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })],
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
