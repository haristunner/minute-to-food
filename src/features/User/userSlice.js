import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: localStorage.getItem("user"),
  profile: localStorage.getItem("profile"),
  location: localStorage.getItem("location"),
  auth: localStorage.getItem("auth"),
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartClicked: false,
  counter: window.localStorage.getItem("counter"),
  cost: "",
  totalCost: [],
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
      // Find the existing ones if its there:
      const existing = state.cart.findIndex(
        (item) => item.p === action.payload.p
      );
      console.log("exist ", existing);

      // If newly add means existing will be -1
      // else it already have means existing will be the index in that array
      // so if it returns -1 ,then only we pushing to the cart
      // then newly coming product only get added
      if (existing < 0) {
        let productTemp = { ...action.payload };
        state.cart.push(productTemp);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    cart_clicked: (state, action) => {
      state.cartClicked = action.payload;
    },

    counter_reducer: (state, action) => {
      state.counter = action.payload;
    },

    set_cost: (state, action) => {
      state.cost = action.payload;
    },

    set_total: (state, action) => {
      state.totalCost = action.payload;
    },
  },
});

export const {
  set_username,
  set_profile,
  set_location,
  auth_state,
  add_to_cart,
  cart_clicked,
  counter_reducer,
  set_cost,
  set_total,
} = userSlice.actions;

export default userSlice.reducer;
