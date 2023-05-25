import React, { createContext, useReducer } from 'react';

const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count +  1};
    case 'decrement':
      return { count: state.count - 1 };
    case 'zero':
      return { count: state.count *state.count };
    default:    
      throw new Error();
  }
}
export const CC = createContext();
export function CounterProv(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CC.Provider value={{ state, dispatch }}>
      {props.children}
    </CC.Provider>
  );
}
