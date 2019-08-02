import React from 'react';
import {
  Container, View, Text, Button,
} from 'native-base';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prop-types
const Login = ({ counter, navigation }) => (
  <Container>
    <View>
      <Text>login screen</Text>
      <Text>{counter}</Text>
      <Button onPress={() => navigation.navigate('App')}><Text>Login</Text></Button>
    </View>
  </Container>
);

export default connect(({ counter }) => ({ counter }))(Login);
