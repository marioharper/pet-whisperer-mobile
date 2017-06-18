import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CSS from './styles';

const Nav = ({ navigation }) => (
  <View style={CSS.container}>
    <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')} >
      <Icon style={CSS.menuBtn} name="menu" size={35} />
    </TouchableOpacity>

    <Text style={CSS.header}>Pet Whisperer</Text>
  </View>
);

export default Nav;
