import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";

export const Cart = () => {
  const carts = useSelector((state) => state.user.cart);
  console.log(carts);

  return (
    <div className="cart" style={{ textAlign: "center" }}>
      <h1 style={{ padding: "3vh 5vw" }}>Place Your Favourite Foods..</h1>
      <div className="cart__container">
        { 
          carts.map((cart, index) => (
            <li key={index}>
              <div className="cart__list">
                <img src={cart.img} alt="" />
                <div className="cart__food">
                  <p>{cart.p}</p>
                  <h6>
                    INR <span>{cart.span}</span>
                  </h6>
                </div>
              </div>
            </li>
          )
        )}
      </div>
    </div>
  );
};
