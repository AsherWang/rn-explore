import { Dimensions } from 'react-native';
import { translate, setI18nConfig, supportedLanguages } from './i18n';
import api from './api';

const { width, height } = Dimensions.get('window');

global.gScreen = {
  width,
  height,
};

global.api = api;

global.i18n = {
  setI18nConfig,
  supportedLanguages,
};
global.$t = translate;

// some glboal config
global.$config = {
  mapBoxAccessToken: 'pk.eyJ1Ijoic291bHdyaXRlciIsImEiOiJjand1a3g3em0wMGl5NDhxdXhzcm1vbmJhIn0.vObzfKUO75-yZLQhydsksw',
  env: 'prod',
  apiHost: 'https://test.writeyoursmile.com',
};
