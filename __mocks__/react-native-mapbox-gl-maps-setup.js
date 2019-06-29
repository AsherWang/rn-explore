/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
// cp from here: https://github.com/react-native-mapbox-gl/maps/blob/master/__tests__/__mocks__/react-native-mapbox-gl.mock.js
import { NativeModules } from 'react-native';

function keyMirror(keys) {
  const obj = {};
  keys.forEach(key => (obj[key] = key));
  return obj;
}

// Mock of what the native code puts on the JS object
NativeModules.MGLModule = {
  // constants
  UserTrackingModes: keyMirror([
    'None',
    'Follow',
    'FollowWithCourse',
    'FollowWithHeading',
  ]),
  StyleURL: keyMirror([
    'Street',
    'Dark',
    'Light',
    'Outdoors',
    'Satellite',
    'SatelliteStreet',
    'TrafficDay',
    'TrafficNight',
  ]),
  EventTypes: keyMirror([
    'MapClick',
    'MapLongClick',
    'RegionWillChange',
    'RegionIsChanging',
    'RegionDidChange',
    'WillStartLoadingMap',
    'DidFinishLoadingMap',
    'DidFailLoadingMap',
    'WillStartRenderingFrame',
    'DidFinishRenderingFrame',
    'DidFinishRenderingFrameFully',
    'DidFinishLoadingStyle',
    'SetCameraComplete',
  ]),
  CameraModes: keyMirror(['Flight', 'Ease', 'None']),
  StyleSource: keyMirror(['DefaultSourceID']),
  InterpolationMode: keyMirror([
    'Exponential',
    'Categorical',
    'Interval',
    'Identity',
  ]),
  LineJoin: keyMirror(['Bevel', 'Round', 'Miter']),
  LineCap: keyMirror(['Butt', 'Round', 'Square']),
  LineTranslateAnchor: keyMirror(['Map', 'Viewport']),
  CirclePitchScale: keyMirror(['Map', 'Viewport']),
  CircleTranslateAnchor: keyMirror(['Map', 'Viewport']),
  FillExtrusionTranslateAnchor: keyMirror(['Map', 'Viewport']),
  FillTranslateAnchor: keyMirror(['Map', 'Viewport']),
  IconRotationAlignment: keyMirror(['Auto', 'Map', 'Viewport']),
  IconTextFit: keyMirror(['None', 'Width', 'Height', 'Both']),
  IconTranslateAnchor: keyMirror(['Map', 'Viewport']),
  SymbolPlacement: keyMirror(['Line', 'Point']),
  TextAnchor: keyMirror([
    'Center',
    'Left',
    'Right',
    'Top',
    'Bottom',
    'TopLeft',
    'TopRight',
    'BottomLeft',
    'BottomRight',
  ]),
  TextJustify: keyMirror(['Center', 'Left', 'Right']),
  TextPitchAlignment: keyMirror(['Auto', 'Map', 'Viewport']),
  TextRotationAlignment: keyMirror(['Auto', 'Map', 'Viewport']),
  TextTransform: keyMirror(['None', 'Lowercase', 'Uppercase']),
  TextTranslateAnchor: keyMirror(['Map', 'Viewport']),
  LightAnchor: keyMirror(['Map', 'Viewport']),
  OfflinePackDownloadState: keyMirror(['Inactive', 'Active', 'Complete']),
  OfflineCallbackName: keyMirror(['Progress', 'Error']),

  // methods
  setAccessToken: jest.fn(),
  getAccessToken: () => Promise.resolve('test-token'),
  setTelemetryEnabled: jest.fn(),
};

NativeModules.MGLOfflineModule = {
  createPack: packOptions => Promise.resolve({
    bounds: packOptions.bounds,
    metadata: JSON.stringify({ name: packOptions.name }),
  }),
  getPacks: () => Promise.resolve([]),
  deletePack: () => Promise.resolve(),
  getPackStatus: () => Promise.resolve({}),
  pausePackDownload: () => Promise.resolve(),
  resumePackDownload: () => Promise.resolve(),
  setPackObserver: () => Promise.resolve(),
  setTileCountLimit: jest.fn(),
  setProgressEventThrottle: jest.fn(),
};

NativeModules.MGLSnapshotModule = {
  takeSnap: () => Promise.resolve('file://test.png'),
};

NativeModules.MGLLocationModule = {
  getLastKnownLocation: () => ({ coords: { longitude: 0, latitude: 0 } }),
  start: jest.fn(),
  pause: jest.fn(),
};

jest.mock('react-native/Libraries/Image/resolveAssetSource', () => () => ({ uri: 'asset://test.png' }));

jest.mock('NativeEventEmitter', () => {
  function MockEventEmitter() {}
  MockEventEmitter.prototype.addListener = jest.fn();
  MockEventEmitter.prototype.removeListener = jest.fn();
  return MockEventEmitter;
});
