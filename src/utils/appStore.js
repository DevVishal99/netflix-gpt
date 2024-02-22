import { configureStore } from "@reduxjs/toolkit";
import userReduce from "./userSlice";
import movieReducer from "./movieSlice"
import gptReducer from"./gptSlice"
import configReducer from"./configSlice"

const appStore = configureStore({
  reducer: {
    user: userReduce,
    movie : movieReducer,
    gpt : gptReducer,
    config : configReducer,
  },
});

export default appStore;