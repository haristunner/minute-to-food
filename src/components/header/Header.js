import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import biriyani from "../../assets/biriyani.jpg";

export const Header = () => {
  return (
    <div className="header">
      <header>
        <div className="header__head">
          <img src={logo} alt="" />
          <div className="header__btn">
            <button className="header__login">Login</button>
            <button className="header__register">Sign Up</button>
          </div>
        </div>
        <h1></h1>
        <h4>Order food from your favourite restaurants near you.</h4>
        <div className="header__form">
          <input type="text" placeholder="Enter your current location" />
          <button>FIND FOOD</button>
        </div>
        <div className="header__place">
          <h5>POPULAR CITIES IN INDIA</h5>
          <p>
            Ahmedabad <span>Bengaluru</span> Chennai <span>Delhi</span> Gurgaon{" "}
            <span>Hyderabad</span> Kolkata <span>Mumbai</span> Pune{" "}
            <span>&more.</span>
          </p>
        </div>
      </header>
    </div>
  );
};
