/* eslint-disable*/

// - run `yarn test` and will get warning like
// `Calling .measureInWindow() in the test renderer environment is not supported....`
// it seems to because the package `react-navigation`

// the mock below is an ugly workaround to avoid warning
const mockComponent = jest.requireActual('react-native/jest/mockComponent');

const mockNativeFunction = () => jest.fn();

const MockNativeMethods = {
  measure: mockNativeFunction('measure'),
  measureInWindow: mockNativeFunction('measureInWindow'),
  measureLayout: mockNativeFunction('measureLayout'),
  setNativeProps: mockNativeFunction('setNativeProps'),
  focus: mockNativeFunction('focus'),
  blur: mockNativeFunction('blur'),
};


jest.mock('View', () => mockComponent('View', MockNativeMethods))
