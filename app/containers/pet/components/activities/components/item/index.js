import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { View, Text, TouchableHighlight } from 'react-native';
import CSS from './styles';

const Item = ({ activity }) => {
  let message;

  switch (activity.type) {
    case 'medication':
      message = 'Took their medication';
      break;
    case 'feed':
      message = 'Was fed by Mario';
      break;
    default:
      message = 'Did an unknown activity';
  }

  return (
    <View style={CSS.container}>
      <Text style={CSS.name}>{message}</Text>
      <Text style={CSS.time}>{moment(activity.at * 1000).fromNow()}</Text>
    </View>
  );
};

Item.propTypes = {
  activity: PropTypes.object.isRequired,
};

export default Item;
