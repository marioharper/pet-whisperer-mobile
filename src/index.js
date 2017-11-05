import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Font, AppLoading } from 'expo';
import { View, StatusBar } from 'react-native';
import { getLoginStatusAndRedirect } from './actions/auth';
import reducer from './reducers';
import AppWithNavigationState from './navigators/Root';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);

export default class App extends Component {
  state = {
    isReady: false,
  }

  initialize = async () => store.dispatch(getLoginStatusAndRedirect())

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.initialize}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={store} >
        <View style={{ flex: 1 }}>
          <StatusBar />
          <AppWithNavigationState />
        </View>
      </Provider>
    );
  }
}
