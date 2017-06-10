import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ListView } from 'react-native';
import Item from '../item';

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
      <View>
        <ListView
          dataSource={this.state.pets}
          renderRow={pet => <Item pet={pet} />}
        />
      </View>
    );
  }
}

List.propTypes = {
  pets: PropTypes.array.isRequired,
};

export default List;
