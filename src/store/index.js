import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./nav-slice";
import topicSlice from "./topic-slice";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    nav: navSlice.reducer,
    topics: topicSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
