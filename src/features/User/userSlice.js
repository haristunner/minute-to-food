import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: localStorage.getItem("user"),
  profile: localStorage.getItem("profile"),
  location: localStorage.getItem("location"),
  auth: localStorage.getItem("auth"),
  cart: [],
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    set_username: (state, action) => {
      state.username = action.payload;
    },
    set_profile: (state, action) => {
      state.profile = action.payload;
    },
    set_location: (state, action) => {
      state.location = action.payload;
    },
    auth_state: (state, action) => {
      state.auth = action.payload;
    },
    add_to_cart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const {
  set_username,
  set_profile,
  set_location,
  auth_state,
  add_to_cart,
} = userSlice.actions;

export default userSlice.reducer;
