import { createStore } from "redux";

/**
 * this function to update state based on action is passed from dispatch function
 * @param {state} state current state
 * @param {object} action the action specify by dispatch
 * @returns new udpated state
 */
const counterReducer = (state = { counter: 0 }, action) => {
  console.log(action);
  switch (action.type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "increase":
      return {
        counter: state.counter + action.amount,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

// create our redux store to manage state of react component,
const store = createStore(counterReducer);

export { counterReducer };
export default store;
