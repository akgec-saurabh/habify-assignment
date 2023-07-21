import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./nav-slice";
import topicSlice from "./topic-slice";

const store = configureStore({
  reducer: { nav: navSlice.reducer, topics: topicSlice.reducer },
});

export default store;
