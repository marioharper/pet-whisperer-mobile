import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Item from '../item';
import CSS from './styles';

class List extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      pets: ds.cloneWithRows(props.pets),
    };
  }

  componentWillReceiveProps(newProps, oldProps) {
    if (newProps.pets !== oldProps.pets) {
      this.setState({
        pets: this.state.pets.cloneWithRows(newProps.pets),
      });
    }
  }

  render() {
    return (
      <ListView
        style={CSS.container}
        dataSource={this.state.pets}
        renderRow={pet => <Item pet={pet} petScreen={this.props.petScreen} />}
      />
    );
  }
}

List.propTypes = {
  pets: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  pets: state.pets,
});

const mapDispatchToProps = dispatch => ({
  petScreen: pet => dispatch(NavigationActions.navigate({ routeName: 'Pet', params: { pet } })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
