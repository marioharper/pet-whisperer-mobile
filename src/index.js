import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';
import { getLoginStatus } from './actions/auth';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

const App = () => {
  store.dispatch(getLoginStatus());

  return (
    <Provider store={store} >
      <AppWithNavigationState />
    </Provider>
  );
};

export default App;
