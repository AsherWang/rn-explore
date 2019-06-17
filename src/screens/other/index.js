import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prop-types
const Other = ({ counter }) => (
  <View>
    <Text>other screen</Text>
    <Text>{counter}</Text>
  </View>
);

export default connect(({ counter }) => ({ counter }))(Other);
