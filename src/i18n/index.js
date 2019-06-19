import { I18nManager } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

// 缓存翻译的结果
export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  en: () => require('./en.json'),
  'zh-CN': () => require('./zh-CN.json'),
  'zh-TW': () => require('./zh-TW.json'),
};

export const supportedLanguages = Object.keys(translationGetters);


// language: e.g. en,zh-CN, auto set most fit language if omitted
// ret language that actually applied
export const setI18nConfig = (language) => {
  let targetLng = null;
  if (language && supportedLanguages.includes(language)) {
    targetLng = {
      languageTag: language,
      isRTL: false,
    };
  } else {
    // auto set
    // fallback if no available language fits
    const fallback = { languageTag: 'en', isRTL: false };
    targetLng = RNLocalize.findBestAvailableLanguage(supportedLanguages) || fallback;
  }

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(targetLng.isRTL);

  // set i18n-js config
  i18n.translations = { [targetLng.languageTag]: translationGetters[targetLng.languageTag]() };
  i18n.locale = targetLng.languageTag;
  return targetLng.languageTag;
};

export default i18n;
