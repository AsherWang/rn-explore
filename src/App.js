import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppContainer from './navigator';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
