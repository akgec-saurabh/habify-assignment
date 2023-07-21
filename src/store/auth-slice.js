import { createSlice } from "@reduxjs/toolkit";

const initalAuthState = {
  isLogin: false,
  loginMode: false,
  user: {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initalAuthState,
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLogin = false;
    },

    onloginMode(state) {
      state.loginMode = true;
    },
    offLoginMode(state) {
      state.loginMode = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
