/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { Button, Text, Icon } from 'native-base';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    borderRadius: 0,
  },
  text: {
    textAlign: 'center',
  },
});

class Stepper extends Component {
  onValueChange(nv) {
    const { onValueChange } = this.props;
    if (onValueChange) {
      onValueChange(nv);
    }
  }

  render() {
    const { value, style } = this.props;
    return (
      <View style={{ ...styles.cont, ...style }}>
        <Button onPress={() => this.onValueChange(value - 1)} style={styles.btn}>
          <Icon name="remove" />
        </Button>
        <View style={styles.text}>
          <Text>{value}</Text>
        </View>
        <Button onPress={() => this.onValueChange(value + 1)} style={styles.btn}>
          <Icon name="add" />
        </Button>
      </View>
    );
  }
}

export default Stepper;
