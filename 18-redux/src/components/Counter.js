import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { Component } from "react";

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
  const increaseHandler = (count = 5) => {
    dispatch &&
      dispatch({
        type: "increase",
        amount: 5,
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
        <button onClick={increaseHandler}>Increase 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class CounterV2 extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(CounterV2);
