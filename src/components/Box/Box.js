import React from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../../features/User/userSlice";

//Box css is in Food.css

export const Box = (props) => {
  const dispatch = useDispatch();

  const [cart, setCart] = [];
  const addToCart = (product) => {
    dispatch(add_to_cart(product));
  };

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
        <h6>ADD TO CART</h6> <ShoppingCartIcon />
      </button>
    </div>
  );
};
