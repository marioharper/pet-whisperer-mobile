import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListView } from 'react-native';
import Item from '../item';
import CSS from './styles';

class List extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      activities: ds.cloneWithRows(props.activities),
    };
  }

  componentWillReceiveProps(newProps, oldProps) {
    if (newProps.activities !== oldProps.activities) {
      this.setState({
        activities: this.state.activities.cloneWithRows(newProps.activities),
      });
    }
  }

  render() {
    return (
      <ListView
        style={CSS.container}
        dataSource={this.state.activities}
        renderRow={activity => <Item activity={activity} />}
      />
    );
  }
}

List.propTypes = {
  activities: PropTypes.array.isRequired,
};

List.defaultProps = {
  activities: [],
};

export default List;
