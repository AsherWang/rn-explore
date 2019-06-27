/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { Button, Text, Icon } from 'native-base';
import { View, StyleSheet } from 'react-native';
import _throttle from 'lodash.throttle';

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
  constructor(props) {
    super(props);
    const { onValueChange, throttle } = props;
    this.onValueChangeThrottled = _throttle((nv) => {
      if (onValueChange) {
        onValueChange(nv);
      }
    }, throttle, { trailing: false });
  }

  render() {
    const { value, style } = this.props;
    return (
      <View style={{ ...styles.cont, ...style }}>
        <Button
          onPress={() => this.onValueChangeThrottled(value - 1)}
          style={styles.btn}
        >
          <Icon name="remove" />
        </Button>
        <View style={styles.text}>
          <Text>{value}</Text>
        </View>
        <Button
          onPress={() => this.onValueChangeThrottled(value + 1)}
          style={styles.btn}
        >
          <Icon name="add" />
        </Button>
      </View>
    );
  }
}

Stepper.defaultProps = {
  throttle: 100,
  value: 0,
  style: {},
};

export default Stepper;
