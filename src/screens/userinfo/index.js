import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prop-types
const UserInfo = ({ counter, navigation }) => (
  <View>
    <Text>userinfo screen</Text>
    <Text>{counter}</Text>
    <Button title="GO OTHER" onPress={() => navigation.navigate('Other')} />
  </View>
);

export default connect(({ counter }) => ({ counter }))(UserInfo);
