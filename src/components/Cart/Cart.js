import React, { useState } from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { Counter } from "./Counter";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export const Cart = () => {
  const carts = useSelector((state) => state.user.cart);
  const cartClicked = useSelector((state) => state.user.cartClicked);
  const counter = useSelector((state) => state.user.counter);
  console.log(carts, cartClicked);

  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }

  const tempCart = removeDuplicates(carts);
  console.log(tempCart);

  return (
    <div className="cart" style={{ textAlign: "center" }}>
      <h1 style={{ padding: "3vh 5vw" }}>Place Your Favourite Foods..</h1>

      {!cartClicked ? (
        <div>Empty</div>
      ) : (
        <div className="cart__container">
          {tempCart.map((cart, index) => (
            <li key={index}>
              <div className="cart__list">
                <img src={cart.img} alt="" />
                <div className="cart__food">
                  <p>{cart.p}</p>

                  {/* cost is passed to props because when counter increases or decreases ,
                   other component cost state also changes */}
                  <Counter cost={cart.span} />
                </div>
              </div>
            </li>
          ))}

          <button>
            <h5>PLACE ORDER</h5> <ShoppingBagIcon />
          </button>
        </div>
      )}
    </div>
  );
};
