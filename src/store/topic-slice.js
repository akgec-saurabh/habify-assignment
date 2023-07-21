import { createSlice } from "@reduxjs/toolkit";

import DUMMY_DATA from "../dummyData.json";

const initialTopicState = {
  initial: DUMMY_DATA,
  filter: DUMMY_DATA,
};

const topicSlice = createSlice({
  name: "topics",
  initialState: initialTopicState,
  reducers: {
    filterTopicByCategory(state, action) {
      state.filter = state.initial.filter((topic) => {
        if (action.payload === "all") {
          return true;
        }
        return topic.category === action.payload;
      });
    },

    //filter by views
    filterTopicByRising(state, action) {
      state.filter = [...state.initial].sort(
        (topic1, topic2) => topic2.views - topic1.views
      );
    },

    filterTopicByLatest(state) {
      state.filter = [...state.initial].sort(
        (topic1, topic2) => topic2.last_activity - topic1.last_activity
      );
    },

    clearFilter(state) {
      state.filter = state.initial;
    },
  },
});

export const topicActions = topicSlice.actions;

export default topicSlice;
