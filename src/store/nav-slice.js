import { createSlice } from "@reduxjs/toolkit";
import DUMMY_DATA from "../dummyData.json";

const uniqueCategoriesSet = new Set(DUMMY_DATA.map((topic) => topic.category));
const allTopics = Array.from(uniqueCategoriesSet);

const initialNavState = {
  all: { allCategory: allTopics, selected: "all" },
  latest: true,
  rising: false,
  liked: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState: initialNavState,
  reducers: {
    filterLatest(state, action) {
      state.latest = !state.latest;
      state.rising = false;
      state.liked = false;
    },

    filterRising(state) {
      state.rising = !state.rising;
      state.liked = false;
      state.latest = false;
    },

    filterLiked(state) {
      state.liked = !state.liked;
      state.rising = false;
      state.latest = false;
    },

    setCategory(state, action) {
      state.all.selected = action.payload;
    },
  },
});

export const navActions = navSlice.actions;

export default navSlice;
