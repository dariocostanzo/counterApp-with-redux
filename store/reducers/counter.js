import { INCREASE_COUNTER, DECREASE_COUNTER } from '../actions/counter';

const initialState = {
  count: 0
};

// 2. create a reducer, which needs to have access to the state in order to be able to modify it
export default (state = initialState, action) => {
  // 7. gets the actions from mapDispatchToProps
  switch (action.type) {
    case INCREASE_COUNTER:
      return { count: state.count + 1 };
    case DECREASE_COUNTER:
      return { count: state.count - 1 };
  }
  return state;
};
