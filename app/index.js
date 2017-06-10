import React from 'react';
import { StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Pets from './containers/pets';
import reducer from './reducers';
import { getPets } from './actions/pets';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

const App = () => {
  const Navigator = StackNavigator({
    Home: { screen: Pets },
  });

  store.dispatch(getPets());

  return (
    <Provider store={store} >
      <Navigator />
    </Provider>
  );
};

export default App;
