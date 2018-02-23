export const ADD_VALUE = 'ADD_VALUE';
export const addValue = (amount) => (
  {
    type: ADD_VALUE,
    payload: amount
  }
);


export const INITIALIZE_STATE = 'INITIALIZE_STATE';
export const initializeState = (data) => (
  {
    type: INITIALIZE_STATE,
    payload: data
  }
);
