import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../store/index.js";

const Counter = () => {
  const dispatch = useDispatch();
  // use this to extract data you want to get from our store. Redux will setup subscription for this component
  // from my understand, I think useSelector do the same way with useState.
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch && dispatch(counterActions.toggleCounter());
  };

  const incrementHandler = () => {
    dispatch && dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch && dispatch(counterActions.increase(10));
  };
  const decrementHandler = () => {
    dispatch && dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
