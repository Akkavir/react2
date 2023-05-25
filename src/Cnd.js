import React, { useContext } from 'react';
import { CC } from './CountProv';

 const Cnd = () => {
 const { state, dispatch } = useContext(CC);
     return (
     <div>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'zero' })}>^</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
     </div>
 );
}
export default Cnd;