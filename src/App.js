import React, { useState } from 'react';
import { Provider } from 'react-redux';
import AppContainer from './navigator';
import store from './models';

const initLocale = i18n.setI18nConfig();

export default function App() {
  const [locale, setRealLocale] = useState(initLocale);
  const setLocale = (newLocale) => {
    const ret = i18n.setI18nConfig(newLocale);
    setRealLocale(ret);
  };
  return (
    <Provider store={store}>
      <AppContainer screenProps={{ locale, setLocale }} />
    </Provider>
  );
}
