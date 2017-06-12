import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import Pets from './containers/pets';
import Pet from './containers/pet';
import CreatePetActivity from './containers/createPetActivity';

export const AppNavigator = StackNavigator({
  Home: { screen: Pets },
  Pet: { screen: Pet },
  CreatePetActivity: { screen: CreatePetActivity },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
