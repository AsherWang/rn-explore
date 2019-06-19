import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppContainer from './navigator';
import store from './models';

const currentLocale = i18n.setI18nConfig();
// console.log(`auto set locale ${currentLocale}`);
// todo: save currentLanguage to store
// console.log('store', store);

export default class App extends Component {
  state = {
    locale: currentLocale,
  };

  setLocale = (locale) => {
    const ret = i18n.setI18nConfig(locale);
    this.setState({ locale: ret });
  };

  render() {
    const { locale } = this.state;
    return (
      <Provider store={store}>
        <AppContainer screenProps={{
          locale,
          setLocale: this.setLocale,
        }}
        />
      </Provider>
    );
  }
}
