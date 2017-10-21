import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getPets } from './actions/pets';
import { login } from './actions/auth';
import AppWithNavigationState from './navigators/AppNavigator';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

const App = () => {
  store.dispatch(login());

  return (
    <Provider store={store} >
      <AppWithNavigationState />
    </Provider>
  );
};

export default App;
