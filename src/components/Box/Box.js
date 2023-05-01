import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add_to_cart, cart_clicked } from "../../features/User/userSlice";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { ShoppingCart } from "@mui/icons-material";

//Box css is in Food.css

export const Box = (props) => {
  const dispatch = useDispatch();
  const [cartClicked, setCartClicked] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const addToCart = (product) => {
    setCartClicked(true);
    setPopUp(true);
    dispatch(add_to_cart(product));
    // window.localStorage.setItem("cart", product);
  };

  if (cartClicked) {
    dispatch(cart_clicked(cartClicked));
  }

  useEffect(() => {
    setTimeout(() => {
      setPopUp(false);
    }, 1500);
  });

  return (
    <div className="box">
      <div>
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
      {popUp ? (
        <div className="popUp">
          <p>Added to cart</p> <ShoppingCart />{" "}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
