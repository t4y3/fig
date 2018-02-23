import { ADD_VALUE, INITIALIZE_STATE } from './actions';

// stateの初期値
const initialState = {
  value: 0,
  ui: {
    isTree: true,
    isInfo: false
  },
  parentIndex: 0,
  childrenIndex: 0,
  list: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_VALUE:
      return Object.assign({}, state, {
        value: state.value + action.payload,
      });
    case INITIALIZE_STATE:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
