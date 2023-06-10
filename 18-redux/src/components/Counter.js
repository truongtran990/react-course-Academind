import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  // use this to extract data you want to get from our store. Redux will setup subscription for this component
  // from my understand, I think useSelector do the same way with useState.
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch &&
      dispatch({
        type: "increment",
      });
  };
  const decrementHandler = () => {
    dispatch &&
      dispatch({
        type: "decrement",
      });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
