import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_to_cart, cart_clicked } from "../../features/User/userSlice";
import LunchDiningIcon from "@mui/icons-material/LunchDining";

//Box css is in Food.css

export const Box = (props) => {
  const dispatch = useDispatch();
  const [cartClicked, setCartClicked] = useState(false);

  const addToCart = (product) => {
    setCartClicked(true);
    dispatch(add_to_cart(product));
    // window.localStorage.setItem("cart", product);
  };

  if (cartClicked) {
    dispatch(cart_clicked(cartClicked));
  }

  return (
    <div className="box">
      <img src={props.img} alt="" />
      <h3>{props.h3}</h3>
      <p>{props.p} </p>
      <h6>
        INR
        <span> {props.span}</span>
      </h6>
      <button onClick={() => addToCart(props)}>
        <h6>ADD TO EAT</h6> <LunchDiningIcon />
      </button>
    </div>
  );
};
