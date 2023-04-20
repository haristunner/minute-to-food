import React from "react";
import "./Nav.css";
import logo from "../../assets/logo.png"

export const Nav = () => {
  return <div className="nav">
    <img src={logo} alt="" />
    <div className="nav__account">
        <p>Welcome</p>
        <div></div>
    </div>
  </div>;
};
