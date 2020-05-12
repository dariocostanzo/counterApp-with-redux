import React from 'react';
import { StyleSheet, View } from 'react-native';
import CounterApp from './components/CounterApp';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './store/reducers/counter';

/**
 * Store - holds our state - THERE IS ONLY ONE STATE
 * Action - State can be modified using actions - SIMPLE OBJECTS
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - receives the action and modifies the state to give us a new state
 * - pure functions
 * - only mandatory argument is the 'type
 * Subscriber - listens for state change to update the ui (using connect)
 */

//4. Connect the store to react native app by importing a provider from react-redux
// and wrap the app, passing the store inside the component
/*  <Provider store={store}>
        <CounterApp />
      </Provider>
*/

//3. creating an initialState for the reducer
// const initialState = {
//   count: 0
// };

// // 2. create a reducer, which needs to have access to the state in order to be able to modify it
// const reducer = (state = initialState, action) => {
//   // 7. gets the actions from mapDispatchToProps
//   switch (action.type) {
//     case 'INCREASE_COUNTER':
//       return { count: state.count + 1 };
//     case 'DECREASE_COUNTER':
//       return { count: state.count - 1 };
//   }
//   return state;
// };

// 1. the store needs a reducer to be able to modify the state
// pass a reducer and create it (const reducer)
// const store = createStore(reducer);

const rootReducer = combineReducers({
  counter: counterReducer
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <CounterApp />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default App;
