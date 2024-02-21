import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./userSlice";
import movieReducer from "./movieSlice"

const appStore = configureStore({
  reducer: {
    user: userReduce,
    movie : movieReducer,
  },
});

export default appStore;