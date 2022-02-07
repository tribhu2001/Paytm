import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authToken: localStorage.getItem("authToken"),
  },
  reducers: {
    login: (state, action) => {
      state.authToken = action.payload;
    },
    logout: (state) => {
      state.authToken = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectAuthToken = (state) => state.auth.authToken;

export default authSlice.reducer;
