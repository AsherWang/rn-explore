import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppContainer from './navigator';
import store from './models';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
