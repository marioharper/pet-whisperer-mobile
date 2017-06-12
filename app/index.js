import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { getPets } from './actions/pets';
import AppWithNavigationState from './AppNavigator';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

const App = () => {
  store.dispatch(getPets());

  return (
    <Provider store={store} >
      <AppWithNavigationState />
    </Provider>
  );
};

export default App;
