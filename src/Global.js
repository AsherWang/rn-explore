import { Dimensions } from 'react-native';
import i18n, { translate, setI18nConfig } from './i18n';
import api from './api';

const { width, height } = Dimensions.get('window');


setI18nConfig(); // set proper language

global.gScreen = {
  width,
  height,
};

global.api = api;

global.i18n = {
  i18n,
  setI18nConfig,
};
global.$t = translate;
