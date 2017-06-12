import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import PetActivities from '../petActivities';
import PetInfo from '../petInfo';

export const PetNavigator = TabNavigator({
  Activities: { screen: PetActivities },
  Info: { screen: PetInfo },
});

const PetWithNavigationState = ({ dispatch, nav, pet }) => (
  <PetNavigator screenProps={{ pet }} navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

PetWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
  pet: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.petNav,
});

export default connect(mapStateToProps)(PetWithNavigationState);
