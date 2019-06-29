import 'react-native';
import React from 'react';
// import Stepper from '../src/components/Stepper';
import AutoHeightImage from '../src/components/AutoHeightImage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const imgSrc = require('./test.jpg');


it('renders correctly', () => {
  const tree = renderer
    .create(<AutoHeightImage source={imgSrc} style={{width:200,height:300}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

