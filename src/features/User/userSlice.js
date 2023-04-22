import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: localStorage.getItem("user"),
  profile: localStorage.getItem("profile"),
  location: localStorage.getItem("location"),
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
  },
});

export const { set_username, set_profile, set_location } = userSlice.actions;

export default userSlice.reducer;
