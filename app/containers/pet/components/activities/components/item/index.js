import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CSS from './styles';

const Item = ({ activity }) => {
  let message;

  switch (activity.type) {
    case 'medicate':
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
      <Icon
        name={activity.type === 'feed' ? 'food-fork-drink' : 'pill'}
        size={20}
        style={CSS.icon}
      />
      <Text style={CSS.message}>{message}</Text>
      <Text style={CSS.time}>{moment(activity.at * 1000).fromNow()}</Text>
    </View>
  );
};

Item.propTypes = {
  activity: PropTypes.object.isRequired,
};

export default Item;
