import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as counterActions from '../store/actions/counter';

import { connect, useDispatch } from 'react-redux';

export const CounterApp = props => {
  const dispatch = useDispatch();

  //   const [count, setCount] = useState(0);

  //   const increaseCounter = () => {
  //     setCount(count + 1);
  //   };
  //   const decreaseCounter = () => {
  //     setCount(count - 1);
  //   };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            dispatch(counterActions.increaseCounter(0));
          }}
        >
          <Text>Increase</Text>
        </TouchableOpacity>
        <Text>Count: {props.count}</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(counterActions.decreaseCounter(0));
          }}
        >
          <Text>Decrease</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
// Create a function called `mapStateToProps`
// 5. takes state.count from the store and map to a prop called count
// for counterApp
// this will be connected to the App through `connect`
const mapStateToProps = state => ({
  count: state.counter.count
});

// const mapDispatchToProps = dispatch => {
//   return {
// increaseCounter: count => dispatch(increaseCounter(count)),
// decreaseCounter: count => dispatch(decreaseCounter(count))
//   };
// };
// 6. dispatch the action (which is an obj with the property of type) to the reducer
// const mapDispatchToProps = dispatch => ({
//   increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
//   decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' })
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
//connect : connects the props the we created to the counterApp
export default connect(mapStateToProps)(CounterApp);
