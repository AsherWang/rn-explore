/* eslint-disable react/prop-types */

import React, { useCallback } from 'react';
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

function Stepper(props) {
  const {
    onValueChange, throttle, value, style,
  } = props;

  const onValueChangeThrottled = useCallback(
    _throttle((nv) => {
      if (onValueChange) {
        onValueChange(nv);
      }
    }, throttle, { trailing: false }),
    [throttle],
  );

  return (
    <View style={{ ...styles.cont, ...style }}>
      <Button
        onPress={() => onValueChangeThrottled(value - 1)}
        style={styles.btn}
      >
        <Icon name="remove" />
      </Button>
      <View style={styles.text}>
        <Text>{value}</Text>
      </View>
      <Button
        onPress={() => onValueChangeThrottled(value + 1)}
        style={styles.btn}
      >
        <Icon name="add" />
      </Button>
    </View>
  );
}

Stepper.defaultProps = {
  throttle: 100,
  value: 0,
  style: {},
};

export default Stepper;
