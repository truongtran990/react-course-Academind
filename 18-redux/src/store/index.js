import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth.js";
import counterReducer from "./counter.js";

// create our redux store to manage state of react component,
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
