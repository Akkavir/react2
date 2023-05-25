import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, zero } from './counterSlice';

function Rcnd() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <br/>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(zero())}>^</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Rcnd;