import React, { useState } from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { Counter } from "./Counter";

export const Cart = () => {
  const carts = useSelector((state) => state.user.cart);
  const cartClicked = useSelector((state) => state.user.cartClicked);
  const counter = useSelector((state) => state.user.counter);
  console.log(carts, cartClicked);

  return (
    <div className="cart" style={{ textAlign: "center" }}>
      <h1 style={{ padding: "3vh 5vw" }}>Place Your Favourite Foods..</h1>
      {!cartClicked ? (
        <div>Empty</div>
      ) : (
        <div className="cart__container">
          {carts.map((cart, index) => (
            <li key={index}>
              <div className="cart__list">
                <img src={cart.img} alt="" />
                <div className="cart__food">
                  <p>{cart.p}</p>
                  <Counter cost={cart.span} />
                </div>
              </div>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};
