import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

/**
 * this function to update state based on action is passed from dispatch function
 * @param {state} state current state
 * @param {object} action the action specify by dispatch
 * @returns new udpated state
 */
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "increase":
      return {
        ...state,
        counter: state.counter + action.amount,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "toggle_counter":
      return {
        ...state,
        showCounter: !state.showCounter,
      };
    default:
      return state;
  }
};

// create our redux store to manage state of react component,
const store = createStore(counterReducer);

export { counterReducer };
export default store;
